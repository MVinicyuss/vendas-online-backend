import { ReturnStateDto } from "src/state/dtos/returnState.dto";
import { CityEntity } from "../entities/city.entity";

export class ReturnCityDto {
    constructor(cityEntity: CityEntity) {
        this.name = cityEntity.name;
        this.state = cityEntity.state ? new ReturnStateDto(cityEntity.state) : undefined;
    }

    name: string; 
    state?: ReturnStateDto;
}