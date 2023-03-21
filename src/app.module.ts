/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './infra/mongoose/databas.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModels } from './schemas/mongoose-model.module';
import { UsersModule } from './users/users.module';
import { jobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModels,
    UsersModule,
    jobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
