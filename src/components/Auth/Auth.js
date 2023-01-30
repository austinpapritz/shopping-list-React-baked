import { NavLink, Redirect, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to="/items"></Redirect>;
  }

  const submitAuth = async () => {
    // TODO
    // call authUser with email, pw, type
    try {
      const newUser = authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
    // if successfull, redirect to items
    // otherwise, display error
  };

  return (
    <div className="auth box">
      <nav className="panel is-success">
        <div className="panel-heading">Welcome to Alchemy Shopping List</div>
        <div className="panel-tabs">
          <NavLink
            className="is-size-6 has-text-weight-bold"
            to="/auth/sign-in"
            activeClassName="is-active"
          >
            Sign In
          </NavLink>
          <NavLink
            className="is-size-6 has-text-weight-bold"
            to="/auth/sign-up"
            activeClassName="is-active"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="panel-block">
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
          </div>
        </div>
        <div className="control">
          <button onClick={submitAuth} className="button is-success mt-2 mb-2">
            Submit
          </button>
        </div>
      </nav>
    </div>
  );
}
