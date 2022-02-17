export class Starship {
    name;
    model;
    manufacturer;
    cost_in_credits;
    length;
    max_atmosphering_speed;
    crew;
    passengers;
    cargo_capacity;
    consumables;
    hyperdrive_rating;
    mglt;
    starship_class;
    pilots;
    films;
    url;
    created;
    edited;
    constructor(data) {
        Object.assign(this, data);
    }
    map_traslate() {
        return {
            nombre: this.name,
            modelo: this.model,
            fabricante: this.manufacturer,
            costo_en_créditos: this.cost_in_credits,
            longitud: this.length,
            velocidad_atmosferica_maxima: this.max_atmosphering_speed,
            tripulación: this.crew,
            pasajeros: this.passengers,
            Capacidad_carga: this.cargo_capacity,
            consumibles: this.consumables,
            calificacion_hiperimpulsor: this.hyperdrive_rating,
            mglt: this.mglt,
            clase_nave_estelar: this.starship_class,
            pilotos: this.pilots,
            pelicula : this.films,
            url: this.url,
            creado: this.created,
            editado: this.edited
        };
    }
}