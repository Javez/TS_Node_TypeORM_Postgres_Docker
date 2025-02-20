![GitHub stars](https://img.shields.io/github/stars/Javez/Country-App?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/Javez/Country-App?style=flat-square)
![GitHub license](https://img.shields.io/github/license/Javez/Country-App?style=flat-square)

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=50&pause=500&color=F78A13&center=true&random=false&width=1000&height=100&lines=Blog App" alt="Typing SVG" />
</a>
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif">

<p align="center">
   <img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="64" height="64">
   <img src="https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif" width="128" height="64">
</p>
<br />

<p align="center">
  <h1 align="center">TS_Node_TypeORM_Postgres_Docker_App.</h1>
</p>
</br>
<p align="center">
  <strong>Typescript: 5.7.3</strong></br>
  <strong>Npm: 10.9.2</strong></br>
  <strong align="center">Node: v22.13.1.</strong>
</p>

<!-- Project Overview -->
## Project Overview

### Backend

**Tech Stack:**
- Typescript
- Node.js 
- Express.js
- TypeORM
- PostgreSQL
- Docker

#### Endpoints:

> [!TIP]
> You can visit my Postman collection: TODO://Link to postman.

1. TODO://

<!-- Installation -->
## 🔧 Installation Win/Linux

1. Create folder and open in IDE;
2. Open the terminal and clone repository;
3. Clone the repository: `https://github.com/Javez/TS_Node_TypeORM_Postgres_Docker.git`;
4. Navigate to the project directory: `cd [folder_name]/`;
5. Install dependencies: `npm install` ([Optional] or use manual install packages with list below);
6. Add dev.env to your backend root folder;
7. Set needed env vars with example.env.txt file in root folder;
8. Congrats! You can start a project by running scripts.

<!-- Packages -->
## ⚙ Packages

> [!WARNING]
> This is the list of packages for manual install!

```sh

npm install -g corepack@0.31.0 cross-env@7.0.3 npm@10.9.2 typescript@5.7.3
npm init -y
npx tsc --init

npm install bcrypt@^5.1.1 body-parser@^1.20.3 class-transformer@^0.5.1 class-validator@^0.14.1 cookie-parser@^1.4.7 dotenv@^16.4.7 envalid@^8.0.0 express@^4.21.2 jsonwebtoken@^9.0.2 pg@^8.13.1 reflect-metadata@^0.2.2 typeorm@^0.3.20

npm install -D @types/bcrypt@^5.0.2 @types/cookie-parser@^1.4.8 @types/express@^5.0.0 @types/jsonwebtoken@^9.0.8 @types/node@^22.10.7 cross-env@^7.0.3 eslint-config-prettier@^10.0.1 node-gyp@^11.0.0 nodemon@^3.1.9 prettier@3.4.2 ts-node@^10.9.2 tslint@^5.20.1 tslint-config-airbnb@^5.11.2 typescript@^3.9.10

```

> [!WARNING]
> This is the tsconfig.json for manual install!

```json
{
  "compilerOptions": {
    "target": "es2017",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "rootDir": "./src",
    "sourceMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  }
}
```

<!-- Run options -->
## 🚀 Run options

| Option | Command |
| :--- | :--- |
| dev | cross-env NODE_ENV=dev npx tsx watch src/server.ts |
| prod | tsc && node dist/server.js |
| lint | tslint -p tsconfig.json -c tslint.json |
| typeorm:cli | ts-node ./node_modules/typeorm/cli |
| migration:create | cross-env NAME=$npm_config_name npm run typeorm:cli -- migration:create src/migrations/%npm_config_name% |
| migration:run | cross-env NODE_ENV=dev npm run typeorm:cli -- migration:run -d src/config/orm.config |
| test | jest |

<!-- Migrations -->
## 🔄 Migrations ##

npm run migration:create --name=[Your_migration_name]

npm run migration:run

## ⚡ Docker container

<p align="center">
  <strong>N/A</strong>
</p>

<!-- Contributing -->
## Contributing

<p align="center">
  <strong>N/A</strong>
</p>

<!-- License -->
## License

> [!CAUTION]
> This is not commercial project.

<!-- Screenshots or GIF Animations -->
## Screenshots/GIFs

<!-- Repository Info Card -->
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=Javez&repo=TS_Node_TypeORM_Postgres_Docker)](https://github.com/Javez/TS_Node_TypeORM_Postgres_Docker)

<!-- Footer -->
<p align="center">
   <strong>Made with ❤️ and TS</strong>
   </br>
</p>
