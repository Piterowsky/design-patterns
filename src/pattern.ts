interface Cloneable {
    clone(): this;
}

class Author {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

class Cover {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
}

class Properties {
    cover: Cover;

    constructor(cover: Cover) {
        this.cover = cover;
    }
}

class Book implements Cloneable {
    pages: number;

    author: Author;

    properties: Properties;

    constructor(pages: number, author: Author, properties: Properties) {
        this.pages = pages;
        this.author = author;
        this.properties = properties;
    }

    clone(): this {
        const obj: this = Object.create(this);
        obj.pages = this.pages;
        obj.author = Object.create(this.author);
        obj.properties = Object.create(this.properties);
        obj.properties.cover = { ...this.properties.cover };
        return obj;
    }
}

((function clientCode() {
    const book: Book = new Book(300, { name: 'Gal Anonim' }, { cover: { type: 'Hard' } });
    const copyOfBook = book.clone();

    if (book !== copyOfBook
        && book.pages === copyOfBook.pages) {
        console.log('Pages have been cloned :)');
    } else {
        console.log('Pages have not been cloned :(');
    }

    if (book !== copyOfBook
        && book.author !== copyOfBook.author
        && book.author.name === copyOfBook.author.name) {
        console.log('Author has been cloned :)');
    } else {
        console.log('Properties has not been cloned :(');
    }

    if (book !== copyOfBook
        && book.properties !== copyOfBook.properties
        && book.properties.cover !== copyOfBook.properties.cover
        && book.properties.cover.type === copyOfBook.properties.cover.type) {
        console.log('Properties have been cloned :)');
    } else {
        console.log('Properties have not been cloned :(');
    }
})());
