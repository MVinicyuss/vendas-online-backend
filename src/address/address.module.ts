import { Module } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}