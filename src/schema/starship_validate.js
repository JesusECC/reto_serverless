import * as yup from "yup";

export const starshipValidator = yup.object().shape({
    nombre: yup.string().required(),
    modelo: yup.string().required(),
    fabricante: yup.string(),
    costo_en_créditos: yup.string().required(),
    longitud: yup.string(),
    velocidad_atmosferica_maxima: yup.string().required(),
    tripulación: yup.string().required(),
    pasajeros: yup.string().required(),
    capacidad_carga: yup.string(),
    consumibles: yup.string(),
    calificacion_hiperimpulsor: yup.string(),
    clase_nave_estelar:yup.string(),
    naves_espaciales: yup.string(),
    pilotos: yup.array().default([]),
    pelicula: yup.array().default([]),
    url: yup.string().default('').url(),
    created: yup.string(),
    edited: yup.string()
});