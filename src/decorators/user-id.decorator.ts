import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { stringAuthorizationToLoginPayload } from "src/utils/base-64-converter";


export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const { authorization } = ctx.switchToHttp().getRequest().headers;

        const loginPayload = stringAuthorizationToLoginPayload(authorization);

        return loginPayload?.id;
    }
  );