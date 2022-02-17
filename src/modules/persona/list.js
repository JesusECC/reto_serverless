import { People } from "../../models/people.model.js";
import { getHTTP } from "../../utils/http-request.js";

const { successResponse } = require("../../utils/response.js");
const { handleError } = require("../../utils/error.js");

const { scanDynamo } = require("../../utils/dynamo.js");

const { ENDPOINT_PEOPLE } = require("../../constant/apis.js");

export const handlerListPerson = async (event) => {
    try {
        let params = {
            TableName: process.env.DYNAMODB_TABLE_PEOPLES,
        };
        const peoplesDynamo = await scanDynamo(params);
        const peoplesSwapi = await getHTTP(ENDPOINT_PEOPLE.LIST_PEOPLE);
        let people = [];
        peoplesSwapi?.results.forEach(element => {
            let tempPeople = new People(element);
            people.push(tempPeople.map_traslate());
        });
        return successResponse(peoplesDynamo?.Items?.concat(people) ? peoplesDynamo?.Items?.concat(people) : [], 'lista de personas');
    } catch (error) {
        return handleError(error);
    }
};
