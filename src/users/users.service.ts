import { Injectable } from '@nestjs/common';
import {MybatisService} from "../database/mybatis.service";
import {userDAO} from "./users.dao";

@Injectable()
export class UsersService {
    constructor(private userDao:userDAO) {
    }

    async selectFindUser(){
        console.log("SERVICE");
        this.userDao.findAll();
    }

}
