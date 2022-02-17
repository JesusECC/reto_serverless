export default function handler(lambda) {
    return async function (event, context) {
      let body, statusCode;
      try {
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
        body = { error: e };
        statusCode = 500;
      }
      return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Amz-Date, X-Api-Key, X-Amz-Security-Token',
          'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
        },
      };
    };
  }