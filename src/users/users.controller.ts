import {Controller, Get, Render} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('user')
export class UsersController {

    constructor(private usersService:UsersService) {
    }

    @Get('/user')
    selectUser(){
        console.log("HELLO CONTROLLER");
        this.usersService.selectFindUser();
    }

    @Get("/login")
    @Render("user/loginForm")
    goLogin(){

    }
}
