// estudiante.ts
class Estudiante extends Persona {
    matricula: string;

    constructor(nombre: string, edad: number, matricula: string) {
        super(nombre, edad);
        this.matricula = matricula;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando con la matrícula ${this.matricula}.`);
    }
}