import { Inject, Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import { createPool } from 'mysql2/promise';
import * as mybatisMapper from 'mybatis-mapper';
import { ConfigService } from '@nestjs/config';
import { Params } from "mybatis-mapper";

@Injectable()
export class MybatisService {
    private readonly pool;
    private readonly mybatisMapper;
    constructor(
        private configService: ConfigService
    ) {
        console.log('START CONNECTION');
        console.log(mysql);
        console.log(this.configService.get('MYSQL_HOST'));
        console.log(this.configService.get('MYSQL_USER'));
        console.log(this.configService.get('MYSQL_PASSWORD'));
        console.log(this.configService.get('MYSQL_PORT'));
        console.log(this.configService.get('MYSQL_DATABASE'));
        console.log(this.configService.get('MYSQL_CONNECTION_LIST'));

        this.pool = createPool({
            host: this.configService.get('MYSQL_HOST'),
            user: this.configService.get('MYSQL_USER'),
            password: this.configService.get('MYSQL_PASSWORD'),
            port: this.configService.get('MYSQL_PORT'),
            database: this.configService.get('MYSQL_DATABASE'),
            connectionLimit: this.configService.get('MYSQL_CONNECTION_LIST'),
        });

        mybatisMapper.createMapper(['src/database/mapper/users/usersMapper.xml']);
    }

    async query(sqlId: string, params?: Params) {

        const conn = await this.pool.getConnection();
        try {
            const query = await mybatisMapper.getStatement('usersMapper', 'selectUser', params);
            const resultMap = await conn.query(query, params);
            console.log("RESSULT:::::", query);
            console.log('RESULT:::::', resultMap);
            return resultMap[0];
        } finally {
            conn.release();
        }
    }
}