import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MybatisModule } from "../database/mybatis.module";
import {UsersController} from "./users.controller";
import {userDAO} from "./users.dao";

@Module({
  imports: [
    MybatisModule, // MybatisModule을 임포트
  ],
  controllers:[UsersController],
  providers: [UsersService, userDAO]
})
export class UsersModule {}
