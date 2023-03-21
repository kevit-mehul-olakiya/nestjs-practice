/* eslint-disable prettier/prettier */
import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AccountLoginDTO } from './dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('login')
  login(@Body() accountLoginDto: AccountLoginDTO) {
    return this.usersService.login(accountLoginDto);
  }

  @Get()
  async fineAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  fineOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(@Body() createUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
