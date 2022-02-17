import { People } from "../../models/people.model.js";
import { getDynamo } from "../../utils/dynamo.js";
import { handleError } from "../../utils/error.js";
import { successResponse } from "../../utils/response.js";

const { ENDPOINT_PEOPLE } = require("../../constant/apis.js");
import { getHTTP } from "../../utils/http-request.js";

export const handlerGetPerson = async (event) => {
    try {
        let response;
        let message;
        let cendpoint = `${ENDPOINT_PEOPLE.LIST_PEOPLE}${event.pathParameters.id}`;
        const peoplesSwapi = await getHTTP(cendpoint);
        if (peoplesSwapi) {
            let tempPeople = new People(peoplesSwapi);
            response = tempPeople.map_traslate();
        } else {
            const params = {
                TableName: process.env.DYNAMODB_TABLE_PEOPLES,
                Key: {
                    id: event.pathParameters.id
                }
            };
            const result = await getDynamo(params);
            response = result?.Item;
        }
        if('nombre' in response){
            message = 'lista de persona';
        }else {
            message = 'No se enconte a la persona con el id '+ event.pathParameters.id;
        }
        return successResponse('nombre' in response ? response : [] , message);
    } catch (error) {
        return handleError(error);
    }
};
