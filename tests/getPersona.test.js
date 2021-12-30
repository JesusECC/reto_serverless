import * as handler from '../src/persona/handler';
// const Persona = require("../../model/persona.model");
// console.log('test de obtener persona');
test('setPersona', async () => {
  const event = {
    body: {
      "nombre": "Ana Dorcas",
      "altura": "158",
      "masa": "32",
      "color_pelo": "n/a",
      "color_piel": "white, red",
      "color_ojos": "red",
      "Año_nacimiento": "unknown",
      "genero": "n/a",
      "pais_origen": "https://swapi.py4e.com/api/planets/1/",
      "peliculas": [ "https://swapi.py4e.com/api/films/1/" ],
      "especies": [ "https://swapi.py4e.com/api/species/2/" ],
      "vehiculos": [],
      "naves_espaciales": [],
      "url": "https://swapi.py4e.com/api/people/8/"
    }
  }
  const context = 'context';

  const callback = (error, response) => {
    console.log(response)
    expect(response.statusCode).toEqual(200);
    expect(response.body.error).toBe(false);
    expect(response.message).toEqual("creado con exito");
  };

  await handler.setPersona(event, context, callback);
});
