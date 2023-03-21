/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User, USER_MODEL } from '../user/user.schema';
import { JOB_TYPE } from '../../constants';
import { Address, AddressSchema } from '../common/address.schema';

@Schema({
  timestamps: true,
})
export class Job {
  @Prop({ type: Types.ObjectId, ref: USER_MODEL, required: true })
  employer: Types.ObjectId | User;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  experience: number;

  @Prop({ default: [] })
  tags?: string[];

  @Prop()
  salary?: string;

  @Prop({
    type: String,
    enum: Object.keys(JOB_TYPE),
    required: true,
  })
  type: JOB_TYPE;

  @Prop({ type: AddressSchema, required: true })
  location: Address;
}
export type JobDocuments = Job & Document;
export const JobSchema = SchemaFactory.createForClass(Job);

JobSchema.pre('findOne', function (next: Function) {
  this.populate('employer');
  next();
});

export const JOB_MODEL = Job.name; // Job
