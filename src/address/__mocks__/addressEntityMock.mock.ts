
import { cityEntityMock } from "../../city/__mocks__/cityEntityMock.mock";
import { AddressEntity } from "../entities/address.entity";
import { userEntityMock } from "../../user/__mocks__/userEntity.mock";

export const addressEntityMock: AddressEntity = {
    id: 216321,
    userId: userEntityMock.id,
    complement: "teste Mock",
    number: 123123,
    cep: "213123-00",
    cityId: cityEntityMock.id,
    created_at: new Date(),
    updated_at: new Date(),
}