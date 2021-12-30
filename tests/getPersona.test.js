import * as handler from '../src/persona/handler';
test('getPersona', async () => {
  const event = {pathParameters: { id: "6" }}
  const context = 'context';
  
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body.data).toBe(Object);
    expect(response.data.id).toEqual("6");
  };

  await handler.getPersona(event, context, callback);
});
