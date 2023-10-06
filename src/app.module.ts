import {forwardRef, Module} from '@nestjs/common';
import { ConfigModule} from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';

import * as process from 'process';
import {MybatisModule} from "./database/mybatis.module";
import {MybatisService} from "./database/mybatis.service";
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from "./users/users.service";
import { userDAO } from "./users/users.dao";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      cache: true,
      expandVariables: true,
      load:[config]
    }),
      MybatisModule,
      UsersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, userDAO, MybatisService],
})
export class AppModule {}