class Singletone {
    private static instance: Singletone;

    private constructor() {
    }

    public static getInstance(): Singletone {
        if (!Singletone.instance) {
            this.instance = new Singletone();
        }
        return this.instance;
    }

    print() {
        console.log('Singeltone');
    }
}

((function clientCode() {
    const s1 = Singletone.getInstance();
    const s2 = Singletone.getInstance();
    s1.print();
    s2.print();
    console.log('Do both objects point to the same instance?: ', s1 === s2);
})());
