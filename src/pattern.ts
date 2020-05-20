interface CarBuilder {
    engine(e: string): void;

    fuel(f: boolean): void;

    wheels(w: number): void;

    build(): Car;
}

class ConcreteCarBuilder implements CarBuilder {

    car: Car;

    constructor() {
        this.car = new Car();
    }

    engine(e: string): void {
        this.car.engine = e;
    }

    fuel(f: boolean): void {
        this.car.fuel = f;
    }

    wheels(w: number): void {
        this.car.wheels = w;
    }

    build(): Car {
        const { car } = this;
        this.car = new Car();
        return car;
    }
}

class Car {
    public engine: string;

    public wheels: number;

    public fuel: boolean;

    toString(): string {
        return `Car{ engine="${this.engine}", wheels="${this.wheels}", fuel="${this.fuel}" }`;
    }
}

class Director {
    carBuilder: CarBuilder;

    constructor(carBuilder: CarBuilder) {
        this.carBuilder = carBuilder;
    }

    buildFuelUpCar(): Car {
        this.carBuilder.engine('125KM PETROL');
        this.carBuilder.fuel(true);
        this.carBuilder.wheels(4);
        return this.carBuilder.build();
    }

    buildElectricCar() {
        this.carBuilder.engine('100KM ELECTRIC');
        this.carBuilder.fuel(false);
        this.carBuilder.wheels(3);
        return this.carBuilder.build();
    }
}

((function clientCode() {
    const carBuilderDirector: Director = new Director(new ConcreteCarBuilder());
    const car1 = carBuilderDirector.buildElectricCar();
    const car2 = carBuilderDirector.buildFuelUpCar();
    console.table([car1, car2]);
})());
