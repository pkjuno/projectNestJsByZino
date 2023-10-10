import {DynamicModule, Module} from '@nestjs/common';
import { MybatisService } from './mybatis.service';

@Module({})
export class MybatisModule {
    static register(options:string):DynamicModule{
        return{
            module : MybatisModule,
            providers: [
                {
                    provide: 'MAPPER_PATH',
                    useValue: options,
                },
                MybatisService
            ],
            exports: [MybatisService],
        }
    }
}