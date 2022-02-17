import { getDynamo } from "../../utils/dynamo.js";
import { handleError } from "../../utils/error.js";
import { successResponse } from "../../utils/response.js";

const { ENDPOINT_STARSHIP } = require("../../constant/apis.js");
import { getHTTP } from "../../utils/http-request.js";
import { Starship } from "../../models/starships.model.js";

export const handlerGetStrship = async (event) => {
    try {
        let response;
        let message;
        let cendpoint = `${ENDPOINT_STARSHIP.LIST_STARSHIP}${event.pathParameters.id}`;
        const starshipSwapi = await getHTTP(cendpoint);
        if (starshipSwapi) {
            let tempStarship = new Starship(starshipSwapi);
            response = tempStarship.map_traslate();
        } else {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_STARSHIP,
                Key: {
                    id: event.pathParameters.id
                }
            };
            const result = await getDynamo(params);
            response = result?.Item;
        }
        if('nombre' in response){
            message = 'Detalle de la nave estelar';
        }else {
            message = 'No se encontro la nave estelar con el id '+ event.pathParameters.id;
        }
        return successResponse('nombre' in response ? response : [] , message);
    } catch (error) {
        return handleError(error);
    }
};
