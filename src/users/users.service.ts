import { Injectable } from '@nestjs/common';
import { MybatisService } from "../database/mybatis.service";

@Injectable()
export class UsersService {

    private readonly mapperPath = "src/database/mapper/user/userMapper.xml";
    private readonly nameSpace= "userMapper";
    constructor(private mybatisService:MybatisService) {}

    async selectFindUser(){
        console.log("SERVICE");

        const params = {
            userId : "123"
        };

        const result = this.mybatisService.query(this.mapperPath, this.nameSpace, "selectUser" , params );
        console.log("USER SERVICE RESULT ::::   " ,result);
    }

}
