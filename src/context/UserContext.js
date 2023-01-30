// TODO -- create the user provider!
const { createContext, useState } = require('react');

const { getUser } = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}> {children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
