import * as uuid from "uuid";
import handler from "../../libs/handler-lib";
import dynamoDb from "../../libs/dynamodb-lib";

const Persona = require("../../model/persona.model");

var req = require('request');
export const getPersonas = handler(async (event, context, callback) => {
  const params = {
    TableName: process.env.tableName,
  };

  const data = await dynamoDb.scan(params);
  return {
    error: false,
    message: 'Lista de personas',
    data: data,
    code: 200
  };
});

const getPeople = (params) => new Promise((resolve, reject) => {
  let dataTem;
  let data;
  req.get(params, function (err, res, body) {
    if (err) {
      return resolve(err);
    } else {
      dataTem = JSON.parse(body);
      data = mapPersona(dataTem);
      return resolve(data);
    }
  });
});

export const getPersona = handler(async (event, context, callback) => {
  console.log('get person');
  let persona;
  const params = {
    TableName: process.env.tableName,
    Key: {
      id: event.pathParameters.id
    }
  };
  const result = await dynamoDb.get(params);
  if (!result.Item) {
    const parametros = {
      url: 'https://swapi.py4e.com/api/people/' + event.pathParameters.id,
    };
    persona = await getPeople(parametros);
    persona.id = event.pathParameters.id;
    const parametro = {
      TableName: process.env.tableName,
      Item: savePerson(persona, event.pathParameters.id)
    };
    await dynamoDb.put(parametro);
  } else {
    persona = result.Item;
  }
  console.log('result ');
  console.log(persona.id);
  return {
    error: false,
    message: 'Lista de persona',
    data: persona,
    code: 200
  };
});
function mapPersona(persona) {
  Persona.nombre = persona.name;
  Persona.altura = persona.height;
  Persona.masa = persona.mass;
  Persona.color_pelo = persona.hair_color;
  Persona.color_piel = persona.skin_color;
  Persona.color_ojos = persona.eye_color;
  Persona.Año_nacimiento = persona.birth_year;
  Persona.genero = persona.gender;
  Persona.pais_origen = persona.homeworld;
  Persona.peliculas = persona.films;
  Persona.especies = persona.species;
  Persona.vehiculos = persona.vehicles;
  Persona.naves_espaciales = persona.starships;
  Persona.creado = persona.created;
  Persona.editado = persona.edited;
  Persona.url = persona.url;
  return Persona;
};


export const setPersona = handler(async (event, context, callback) => {
  let persona = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: savePerson(persona)
  };
  const result = await dynamoDb.put(params);
  return {
    error: false,
    message: 'creado con exito',
    code: 200
  };
});

function savePerson(persona, id = "") {
  const hoy = new Date(Date.now());
  Persona.id = id != "" ? id : uuid.v1();
  Persona.nombre = persona.nombre;
  Persona.altura = persona.altura;
  Persona.masa = persona.masa;
  Persona.color_pelo = persona.color_pelo;
  Persona.color_piel = persona.color_piel;
  Persona.color_ojos = persona.color_ojos;
  Persona.Año_nacimiento = persona.Año_nacimiento;
  Persona.genero = persona.genero;
  Persona.pais_origen = persona.pais_origen;
  Persona.peliculas = persona.peliculas;
  Persona.especies = persona.especies;
  Persona.vehiculos = persona.vehiculos;
  Persona.naves_espaciales = persona.naves_espaciales;
  Persona.creado = persona?.creado ? persona.creado : hoy.toISOString();
  Persona.editado = persona?.editado ? persona.editado : hoy.toISOString();
  Persona.url = persona.url;
  return Persona;
};