
const _private = new WeakMap();

class Book {
    // ====== Método constructor ======
    constructor(title, author, price) {
        // ====== Propiedades ======
        const properties = {
            _title: title,
            _author: author,
            _price: price
        }
        // Colocar propiedades como privadas:
        _private.set(this, {properties});
    }

    // ====== Métodos / Getters-Setters ======

    // Obtiene el título de un libro:
    get title() {
        return _private.get(this).properties['_title'];
    }

    // Setea/modifica el título de un libro:
    set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
    }

    get author() {
        return _private.get(this).properties['_author'];
    }

    set author(newAuthor) {
        return _private.get(this).properties['_author'] = newAuthor;
    }

    get price() {
        return _private.get(this).properties['_price'];
    }

    // No coloques éste setter para prices sino quieres dar acceso.
    set price(newPrice) {
        return _private.get(this).properties['_price'] = newPrice;
    }

    // Muestra todos los datos de un libro.
    getAllData() {
        console.log( `Título: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`);
    }

}


// Intancia de Book:
const book1 = new Book('Las 48 leyes del poder', 'Robert Greene', 6000);
const book2 = new Book('La psicologia del autoengaño' , 'Daniel Goleman', 4500)
const book3 = new Book(prompt("Ingrese titulo") , prompt("Ingrese Autor") , prompt("Ingrese precio"))



book1.getAllData();
book2.getAllData();
book3.getAllData();












