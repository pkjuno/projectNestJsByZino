import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MybatisModule } from "../database/mybatis.module";
import { UsersController } from "./users.controller";
import {MybatisService} from "../database/mybatis.service";

@Module({
   // imports: [
   //   MybatisModule.register("src/database/mapper/user/userMapper.xml"), // MybatisModule을 임포트
   // ],
  controllers:[UsersController],
  providers: [UsersService, MybatisService]
})
export class UsersModule {}
