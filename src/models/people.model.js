export class People {
    id;
    name;
    birth_year;
    eye_color;
    gender;
    hair_color;
    height;
    mass;
    skin_color;
    homeworld;
    films;
    species;
    starships;
    vehicles;
    url;
    created;
    edited;
    constructor(data) {
        Object.assign(this, data);
    }
    map_traslate() {
        return {
            nombre: this.name,
            altura: this.height,
            masa: this.mass,
            color_pelo: this.hair_color,
            color_piel: this.skin_color,
            color_ojos: this.eye_color,
            anio_nacimiento: this.birth_year,
            genero: this.gender,
            pais_origen: this.homeworld,
            peliculas: this.films,
            especies: this.species,
            vehiculos: this.vehicles,
            naves_espaciales: this.starships,
            creado: this.created,
            editado: this.edited,
            url: this.url,
        };
    }
}