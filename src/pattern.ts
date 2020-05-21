abstract class Creator {
    abstract create(): Product;
}

interface Product {
    print(): void;
}

class ProductRed implements Product {
    print(): void {
        console.log('Product Red');
    }
}

class ProductGreen implements Product {
    print(): void {
        console.log('Product Green');
    }
}

class RedCreator extends Creator {
    create(): Product {
        return new ProductRed();
    }
}

class GreenCreator extends Creator {
    create(): Product {
        return new ProductGreen();
    }
}

const clientCode = function clientCode(creator: Creator) {
    creator.create().print();
};

clientCode(new RedCreator());
clientCode(new GreenCreator());
