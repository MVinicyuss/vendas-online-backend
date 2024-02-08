import { userEntityMock } from "../../user/__mocks__/userEntity.mock";
import { LoginUserDto } from "../dtos/login.dto";

export const loginPayloadMock: LoginUserDto ={
    email: userEntityMock.email,
    password: "teste1"
}