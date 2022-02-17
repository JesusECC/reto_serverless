
import { Starship } from "../../models/starships.model.js";
import { getHTTP } from "../../utils/http-request.js";

const { successResponse } = require("../../utils/response.js");
const { handleError } = require("../../utils/error.js");

const { scanDynamo } = require("../../utils/dynamo.js");

const { ENDPOINT_STARSHIP } = require("../../constant/apis.js");

export const handlerListStarships = async (event) => {
    try {
        let params = {
            TableName: process.env.DYNAMODB_TABLE_STARSHIP,
        };
        const starshipDynamo = await scanDynamo(params);
        const starshipSwapi = await getHTTP(ENDPOINT_STARSHIP.LIST_STARSHIP);
        let starship = [];
        starshipSwapi?.results.forEach(element => {
            let tempStarship = new Starship(element);
            starship.push(tempStarship.map_traslate());
        });
        return successResponse(starshipDynamo?.Items?.concat(starship) ? starshipDynamo?.Items?.concat(starship) : [], 'lista de naves estelares');
    } catch (error) {
        return handleError(error);
    }
};
