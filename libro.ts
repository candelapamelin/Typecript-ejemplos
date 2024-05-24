class Libro {
    titulo: string;
    hojas: Hoja[];

    constructor(titulo: string, hojas: Hoja[]) {
        this.titulo = titulo;
        this.hojas = hojas;
    }

    leerLibro() {
        console.log(`Leyendo el libro "${this.titulo}":`);
        this.hojas.forEach(hoja => hoja.leer());
    }
}

// Ejemplo de uso
const hoja1 = new Hoja(1, "Contenido de la hoja 1");
const hoja2 = new Hoja(2, "Contenido de la hoja 2");
const libro = new Libro("Mi Libro", [hoja1, hoja2]);
libro.leerLibro();
