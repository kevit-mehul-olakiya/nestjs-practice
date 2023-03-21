/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
// import { MongooseModels } from '../schemas/mongoose-model.module';
import { UsersModule } from 'src/users/users.module';
import { JobsController } from './jobs.controller';

@Module({
  imports: [UsersModule],
  providers: [JobsService],
  controllers: [JobsController],
  exports: [JobsService],
})
export class jobsModule {}
