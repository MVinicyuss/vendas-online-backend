import { StateEntity } from "../entities/state.entity";

export class ReturnStateDto {
    constructor(stateEntity: StateEntity) {
        this.name = stateEntity.name;
    }

    name: string;
}