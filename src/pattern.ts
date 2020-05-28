interface Observer {
    notify(newState: string): void;
}

interface Subject {
    addObserver(observer: Observer): void

    addAllObservers(...observers: Observer[]): void;

    removeObserver(observer: Observer): void

    notify(newState: string): void

    changeState(): void;
}

class ConcreteObserver implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(newState: string): void {
        console.log(`Observer notified, new state = "${newState}"`);
    }
}

class ConcreteSubject implements Subject {
    private veryHiddenSubjectState: string = 'This is sooo secret';

    private observers: Set<Observer> = new Set<Observer>();

    addAllObservers(...observers: Observer[]) {
        observers.forEach((observer) => this.addObserver(observer));
    }

    addObserver(observer: Observer): void {
        const isExist = this.observers.has(observer);
        if (isExist) {
            console.log('Observer already registered');
        }

        console.log('Registering a observer');
        this.observers.add(observer);
    }

    removeObserver(observer: Observer): void {
        console.log('Removing observer');
        this.observers.delete(observer);
    }

    notify(newState: string): void {
        this.observers.forEach((observer: Observer) => observer.notify(newState));
    }

    changeState(): void {
        const newState = `Random number: ${Math.round(Math.random() * 1000)}`;
        this.veryHiddenSubjectState = newState;
        this.notify(newState);
    }
}

((function clientCode() {
    const observers: Observer[] = [
        new ConcreteObserver('Red'),
        new ConcreteObserver('Green'),
        new ConcreteObserver('Blue'),
    ];

    const subject: Subject = new ConcreteSubject();
    subject.addAllObservers(...observers);

    new Array(50).fill(1).forEach(() => {
        subject.changeState();
        console.log('-'.repeat(50));
    });
})());
