import { Injectable } from '@nestjs/common';
import { MybatisService } from '../database/mybatis.service'; // MybatisService 임포트
import { UsersDto } from './users.dto';

@Injectable()
export class userDAO {
    constructor(private mybatisService: MybatisService) {} // MybatisService 주입

    async findAll() {
        console.log("HERE DAO");
        // MyBatis 매퍼를 호출하여 데이터를 검색
        const users = await this.mybatisService.query("SELECT USER_ID FROM TBL_USERS",{userId:"123"});

        // 여기에서 어떻게 반환할지에 따라 반환 형식을 조정하세요.
        return users;
    }
}