
import { stateEntityMock } from "../../state/__mocks__/stateEntityMock.mock";
import { CityEntity } from "../entities/city.entity";

export const cityEntityMock: CityEntity = {
    id: 12312,
    stateId: stateEntityMock.id,
    name: "teste Mock",
    created_at: new Date(),
    updated_at: new Date(),
}