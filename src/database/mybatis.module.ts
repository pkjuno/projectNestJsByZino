import { Module } from '@nestjs/common';
import { MybatisService } from './mybatis.service';

@Module({
    providers: [MybatisService],
    exports: [MybatisService],
})
export class MybatisModule {}