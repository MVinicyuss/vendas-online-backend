import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {
  constructor(private readonly stateRepository: Repository<StateEntity>) {}

  async getAllStates() {
    return await this.stateRepository.find();
  }
}
