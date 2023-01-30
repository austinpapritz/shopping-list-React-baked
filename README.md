# Alchemy Shopping List -- React Style

## Demo

[Live Demo Here](https://alchemy-react-shopping.netlify.app/)

## Getting Started

[Use this template](https://github.com/alchemycodelab/react-half-baked-shopping-list) to get started.

## Description

You have been tasked with adding authentication to a Shopping App. Your designer has already built out all the components, you just need to wire up the routes and the redirects. This requires you creating a User object in context so that multiple components can reference the currently logged in user.

## Acceptance Criteria

- `/` route redirects to `/auth/sign-up`
- `/auth/sign-up` and `/auth/sign-in` redirect to `/items` if there is a current user
- `/items` redirects to `/auth/sign-in` if there is not a signed in user
- Users can sign in and sign up for an account

Search for `TODO` in the app to find the various places you need to add code

## Rubric

| Looking for...                                                                        | Points |
| ------------------------------------------------------------------------------------- | ------ |
| User Provider exports `user` and `setUser` state and setter function                  | 2      |
| Auth component uses UserContext and redirects to `/items` if current user             | 2      |
| Items component uses UserContext and redirects to `/auth/sign-in` if not current user | 2      |
| Users can sign in and sign up for an account                                          | 2      |
| Home route `/` redirects to auth                                                      | 2      |
