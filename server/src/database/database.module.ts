import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://nest:1234@mongodb', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }),
//   ],
// })
// export class MongoModule {}

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mongodb',
//       url: 'mongodb://nest:1234@mongodb',
//       entities: [path.join(__dirname, '**/**.entity{.ts,.js}')],
//       synchronize: true,
//       useNewUrlParser: true,
//       logging: true,
//     }),
//   ],
// })
// export class TypeOrmMongoModule {}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'me',
      password: '1234',
      database: 'testDb',
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [path.join(__dirname, '../**/*.entity.{ts,js}')],
    }),
  ],
})
export class PostgresModule {}
