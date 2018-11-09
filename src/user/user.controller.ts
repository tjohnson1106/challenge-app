import { Controller, Post, Get, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("api/users")
  showAllUsers() {
    return this.userService.showAll();
  }

  @Post("login")
  login(@Body() data) {
    return this.userService.login(data);
  }

  @Post("register")
  register(@Body() data) {
    return this.userService.register(data);
  }
}
