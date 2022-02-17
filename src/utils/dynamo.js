import dynamoDb from "../libs/dynamodb-lib";

// export const getPeoples = async (params) => {
//     return await dynamoDb.scan(params);
// };
// export const setPeople = async (params) => {
//     return await dynamoDb.put(params);
// };
// export const getPeople = async (params) => {
//     return await dynamoDb.get(params);
// }


export const scanDynamo = async (params) => {
    return await dynamoDb.scan(params);
};
export const setDynamo = async (params) => {
    return await dynamoDb.put(params);
};
export const getDynamo = async (params) => {
    return await dynamoDb.get(params);
};