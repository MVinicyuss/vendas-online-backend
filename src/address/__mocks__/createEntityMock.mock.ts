import { cityEntityMock } from "src/city/__mocks__/cityEntityMock.mock";
import { CreateAddressDto } from "../dtos/createAddress.dto";
import { addressEntityMock } from "./addressEntityMock.mock";

export const createAddressMock: CreateAddressDto = {
    complement: addressEntityMock.complement,
    number: addressEntityMock.number,
    cep: addressEntityMock.cep,
    cityId: addressEntityMock.cityId,
}