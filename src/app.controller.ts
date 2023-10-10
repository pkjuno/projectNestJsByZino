import {Controller, Get, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/index")
  @Render("index")
  async getIndex(){
    return{ message: "HEllO WORILD"};
  }

  @Get("/post")
  @Render("post")
  getPost(){
    return{ message: "HEllO WORILD"};
  }

  @Get("/about")
  @Render("about")
  getAbout(){
    return{ message: "HEllO WORILD"};
  }

  @Get("/contact")
  @Render("contact")
  getContact(){
    return{ message: "HEllO WORILD"};
  }

}
