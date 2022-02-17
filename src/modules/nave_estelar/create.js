// import { peopleValidator } from "../../schema/people_validate";
import { handleError } from "../../utils/error";
import { successResponse } from "../../utils/response";
import * as uuid from "uuid";
import { setDynamo } from "../../utils/dynamo";
import { starshipValidator } from "../../schema/starship_validate";

export const handlerSetStarship = async (event) => {
    try {
        let fecha = new Date(Date.now());
        let body = JSON.parse(event.body);
        await starshipValidator.validate(body, { abortEarly: false });
        const params = {
            TableName: process.env.DYNAMODB_TABLE_STARSHIP,
            Item: { id: uuid.v1(), ...body, creado:fecha, editado: fecha}
        };
        await setDynamo(params);
        return successResponse([], 'Creado correctamente');
    } catch (error) {
        return handleError(error);
    }
};
