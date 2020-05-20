interface AbstractFactory {
    createCar(): AbstractCar;
    creatBus(): AbstractBus;
}

interface AbstractCar {
    readonly seats: number;

    printCar(): void;
}

interface AbstractBus {
    readonly seats: number;

    printBus(): void;
}

class AudiFactory implements AbstractFactory {
    creatBus(): AbstractBus {
        return new AudiBus(30);
    }

    createCar(): AbstractCar {
        return new AudiCar(5);
    }
}

class VolkswagenFactory implements AbstractFactory {
    creatBus(): AbstractBus {
        return new VolkswagenBus(35);
    }

    createCar(): AbstractCar {
        return new VolksvagenCar(4);
    }
}

class AudiCar implements AbstractCar {
    readonly seats: number;

    constructor(seats: number) {
        this.seats = seats;
    }

    printCar(): void {
        console.log(`Audi car, seats=${this.seats}`);
    }
}

class VolksvagenCar implements AbstractCar {
    readonly seats: number;

    constructor(seats: number) {
        this.seats = seats;
    }

    printCar(): void {
        console.log(`Volksvagen car, seats=${this.seats}`);
    }
}

class AudiBus implements AbstractBus {
    readonly seats: number;

    constructor(seats: number) {
        this.seats = seats;
    }

    printBus(): void {
        console.log(`Audi bus, seats=${this.seats}`);
    }
}

class VolkswagenBus implements AbstractBus {
    readonly seats: number;

    constructor(seats: number) {
        this.seats = seats;
    }

    printBus(): void {
        console.log(`Volksvagen bus, seats=${this.seats}`);
    }
}

function doClientStuff(abstractFactory: AbstractFactory) {
    abstractFactory.creatBus().printBus();
    abstractFactory.createCar().printCar();
}

const abstractFactory: AbstractFactory = Math.random() - 0.5 > 0 ? new VolkswagenFactory() : new AudiFactory();

doClientStuff(abstractFactory);
