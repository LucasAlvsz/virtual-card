<h1 align="center">
  Virtual Card
  </br>
    <a href="https://virtual-card-pi.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version">
    </a>
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30px"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Docker-228FE1?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Virtual Card simulates a app that allows you to create and access your virtual cards.

</br>

## Features

-   Create and save a virtual card as a PNG image.
-   Aceess the virtual card by a unique URL.

</br>

## API Reference

#### Create a card

```http
POST /card
```

#### Request:

| Body          | Type     | Description   |
| :------------ | :------- | :------------ |
| `name`        | `string` | **Required**. |
| `linkedinUrl` | `string` | **Required**. |
| `githubUrl`   | `string` | **Required**. |

#### Response:

```json
{
	"cardId": "cl9y0owfl00009dfad9rl540t"
}
```

#

#### Get a card

```http
GET /card/:cardId
```

#### Request:

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `cardId`  | `string` | **Required**. |

#### Response:

```json
{
	"name": "Lucas Alves",
	"linkedinUrl": "https://www.linkedin.com/in/LucasAlvsz/",
	"githubUrl": "https://www.github.com/LucasAlvsz/"
}
```

</br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

##### Without Docker:

##### back-end:

`DATABASE_URL = postgres://username:password@hostname:5432/databasename`

`PORT = 5000 or any port you want [optional]`

##### front-end:

`VITE_API_URL = http://localhost:[PORT] or http://localhost:5000`

`VITE_BASE_URL = http://localhost:[PORT] or http://localhost:5000`

#

##### With Docker:

##### back-end:

`DATABASE_URL = postgres://username:password@postgres_db:5432/databasename`

`POSTGRES_USER = postgres`

`POSTGRES_PASSWORD = postgres`

`POSTGRES_DB = virtual-card`

##### front-end:

`VITE_API_URL = http://localhost:8080/api`

`VITE_BASE_URL = http://localhost:8080`

</br>

## Run Locally

> Remember to create a .env file with the environment variables in virtual-card-front and virtual-card-back folders.

##### Without Docker:

Clone the project

```bash
  git clone https://github.com/LucasAlvsz/virtual-card.git
```

Go to the project api directory

```bash
  cd virtual-card/virtual-card-back
```

Install dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

Go to the project client directory

```bash
  cd virtual-card/virtual-card-front
```

Install dependencies

```bash
  npm install
```

Build the project

```bash
  npm run build
```

Start the client

```bash
  npm run preview
```

#

##### With Docker:

```bash
  cd virtual-card
```

```bash
  docker-compose up
```

</br>

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
