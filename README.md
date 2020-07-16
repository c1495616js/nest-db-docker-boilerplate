## Server

## Commit

- https://www.conventionalcommits.org/en/v1.0.0/
- https://github.com/conventional-changelog/commitlint
- https://github.com/commitizen/cz-cli
- https://medium.com/@lorenzen.jacob/standardize-git-commit-messages-b3f938f078be

```
npm install --save-dev @commitlint/{config-conventional,cli}
npm install cz-conventional-changelog --save-dev
npm install commitizen --save-dev
```

```
touch commitlint.config.js

# add this
module.exports = {
  extends: ['@commitlint/config-conventional'],
};

```

#### package.json

```
"husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```

### docker

https://www.hangge.com/blog/cache/category_81_1.html

docker-compose j:up // with en

https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e

https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e

#### node

https://www.digitalocean.com/community/tutorials/how-to-use-the-docker-plugin-for-visual-studio-code

#### mongo

https://stackoverflow.com/questions/40892832/web-based-ui-for-mongodb
https://github.com/huggingface/Mongoku
https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3

http://people.oregonstate.edu/~chriconn/sites/docker_mongoDB/

### postgres

https://markheath.net/post/exploring-postgresql-with-docker

### GraphQL

- pass variable
  https://medium.com/atheros/graphql-quick-tip-how-to-pass-variables-into-a-mutation-in-graphiql-23ecff4add57

- Learning Document
  https://ithelp.ithome.com.tw/users/20111997/ironman/1878?page=1

- ref code
  https://github.com/chnirt/chnirt-demo-nest-typeorm-mongodb

- Schema First (SDL) V.S. Code First
  https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3

#### schema first

```ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://nest:1234@mongodb',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    UserModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## MISC

- upgrade whole packages in `package.json` to new version
