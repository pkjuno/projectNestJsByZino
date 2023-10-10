import {forwardRef, Module} from '@nestjs/common';
import { ConfigModule} from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';

import * as process from 'process';
import { MybatisService } from "./database/mybatis.service";
import { UsersModule } from './users/users.module';
import {MybatisModule} from "./database/mybatis.module";



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      cache: true,
      expandVariables: true,
      load:[config]
    }),
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, MybatisService],
})
export class AppModule {}