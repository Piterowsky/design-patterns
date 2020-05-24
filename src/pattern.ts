interface Graphic {
    x: number;

    y: number;

    move(x: number, y: number): void

    draw(): void;
}

abstract class AbstractGraphic implements Graphic {
    x: number;

    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw(): void {
        console.log(`Drawing at [${this.x}, ${this.y}]`);
    }

    move(x: number, y: number): void {
        console.log(`Moving from [x=${this.x}, y=${this.y}] to [x=${x}, y=${y}]`);
    }
}


class Dot extends AbstractGraphic {
    draw(): void {
        console.log('[DOT]');
        super.draw();
    }

    move(x: number, y: number): void {
        console.log('[DOT]');
        super.move(x, y);
    }
}

class Circle extends AbstractGraphic {
    range: number;

    constructor(x: number, y: number, range: number) {
        super(x, y);
        this.range = range;
    }

    move(x: number, y: number): void {
        console.log('[CIRCLE]');
        super.move(x, y);
    }

    draw(): void {
        console.log('[CIRCLE]');
        super.draw();
    }
}

class CompoundGraphic extends AbstractGraphic {
    x: number;

    y: number;

    graphics: Graphic[] = [];

    constructor(x: number, y: number, ...graphics: Graphic[]) {
        super(x, y);
        this.graphics = graphics;
    }

    draw(): void {
        console.log('[Compound]');
        super.draw();
        console.log('Containing: ');
        console.table(this.graphics);
    }

    move(x: number, y: number): void {
        console.log('[Compound]');
        super.move(x, y);
    }
}


((function clientCode() {
    function randomDigit() {
        return Math.round(Math.random() * 10);
    }

    const circle = new Circle(randomDigit(), randomDigit(), randomDigit());
    const dot = new Dot(randomDigit(), randomDigit());

    const compoundGraphic = new CompoundGraphic(randomDigit(), randomDigit(), circle, dot);

    [dot, circle, compoundGraphic].forEach((graphic: Graphic) => {
        graphic.draw();
        graphic.move(randomDigit(), randomDigit());
    });
})());
