/**
 * ==============
 * 
 * ==============
 */

class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    public doSomeBusinessLogic() {
        // const result = this.strategy
    }

}

/**
 * ==============
 * 
 * ==============
 */

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

/**
 * ==============
 * 
 * ==============
 */

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

/**
 * ==============
 * 
 * ==============
 */

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

/**
 * ==============
 * 
 * ==============
 */

class Client {

    public run() {
        const context = new Context(new ConcreteStrategyA());
        context.doSomeBusinessLogic();

        context.setStrategy(new ConcreteStrategyB());
        context.doSomeBusinessLogic();
    }

}



const client = new Client;
client.run();