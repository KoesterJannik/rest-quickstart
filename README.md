# Starter Template to bootstrap new applications

This is a starter template that is being used to bootstrap a new application using
1. Typescript
2. Express.js
3. React.js
4. Prisma
5. JWT

# Want to just try it out?

1. Clone the repo
2. Run `docker compose up` in the root directory
3. Go to http://localhost

# Backend

The backend uses Typescript and Express.Js. We use Bcrypt for hashing our password and Jwts to know who the user is and what he is allowed to do.
Testing wise we use a combination for Vitest and supertest to create E2E tests

The database is Sqlite in combination with prisma. It is dead simple to use and helps you manage your migrations
Besides that we are mostly using zod to validate whats comming in to make sure we work with what we assume correct data.


# Frontend

The frontend uses Vite with React, Typescript, TailwindCSS and React Router. Everythings works via HTTP Endpoints
