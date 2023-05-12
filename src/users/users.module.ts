import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { AuthService } from '../auth/auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Module({
  //The typeOrm.forFeature() create a repository authomaticcaly
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    CurrentUserInterceptor,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CurrentUserInterceptor,
    // },
  ],
})
export class UsersModule {}
