import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService) {
    }

    @Get('/users')
    selectUser(){
        console.log("HELLO CONTROLLER");
        this.usersService.selectFindUser();
    }
}
