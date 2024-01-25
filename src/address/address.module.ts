import { Module } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UserModule, CityModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
