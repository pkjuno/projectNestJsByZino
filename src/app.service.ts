import { Injectable } from '@nestjs/common';
import {MybatisService} from "./database/mybatis.service";

@Injectable()
export class AppService {

  constructor(private mybatisService:MybatisService) {
  }

  getHello(): string {
    return 'Hello World!';
  }
}
