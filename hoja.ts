class Hoja {
    numero: number;
    contenido: string;

    constructor(numero: number, contenido: string) {
        this.numero = numero;
        this.contenido = contenido;
    }

    leer() {
        console.log(`Leyendo la hoja ${this.numero}: ${this.contenido}`);
    }
}
