# STRATEGY

Strategy Pattern Design defines a family of algorithms
(strategies) and these strategies are interchangeables (in run time).

## PROBLEM

For example, let imagen that you are trying to build and app
that is able to calculate  the best routes for travelers, walkers, 
for transport users, cyclist,  and tourist, so that caused that 
your class (context) became bloated. It is translated in spend a 
lot of time maintining the app.

## SOLUTION

You need to divide the entire code into a separated classes (strategies),
the main class (context) will store a reference to one strategy, and a 
client (button) will choose one of those algorithms that it wants. This implementation 
becomes the context independent of the implementation.

![Strategy Pattern Design](https://refactoring.guru/images/patterns/diagrams/strategy/solution.png?id=0813a174b29a2ed5902d "Strategy Pattern Design")

Each strategy has a single method that receives origin and destination 
and returns a collection. The context is only responsible to render 
the posible routes. The clients (buttons) are able to switch to differents 
strategies.

## STRUCTURE

![Strategy Pattern Design](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png?id=c6aa910c94960f35d100 "Strategy Pattern Design")

## PROS AND CONS

**PROS**:
:heavy_check_mark: you can swap between different algorithms in runtime.
:heavy_check_mark: you can isolate the implementation from the code that uses it.
:heavy_check_mark: You can replace inheritance to composition.
:heavy_check_mark: Open/Close principle. You can introduce new strategies without chaning the context.

**CONS**:
:x: If you have 2 algorithms there is no reason to implement this pattern, because it only will becomes your code more complex.