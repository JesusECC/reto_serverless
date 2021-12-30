import * as handler from '../src/persona/handler';
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
    expect(response.statusCode).toEqual(200);
    expect(response.body.error).toBe(false);
    expect(response.message).toEqual("creado con exito");
  };

  await handler.setPersona(event, context, callback);
});
