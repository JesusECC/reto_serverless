import * as handler from '../src/persona/handler';
// const Persona = require("../../model/persona.model");
// console.log('test de obtener persona');
test('getPersona', async () => {
  const event = { TableName: 'Personas', Key: { id: { S: '6' } } };
  const context = 'context';
  
  const callback = (error, response) => {
    console.log(response)
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body.data).toBe(Object);
    expect(response.data.id).toEqual("6");
  };

  await handler.getPersona(event, context, callback);
});
