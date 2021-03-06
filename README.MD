[![Build Status](https://travis-ci.com/cl598/is219oopprinciples.svg?branch=master)](https://travis-ci.com/cl598/is219oopprinciples)

There are five **SOLID** JavaScript principles
----------------------------------------------
Keep these pointers in mind to become a good JavaScript developer.

**S**ingle Responsibility Principle

    Each function has a SINGLE action, and ONE clear-defined goal.

**O**pen-Closed Principle

    Each JavaScript modules should be OPEN for extensions but CLOSED to modifications.

**L**iskov Substitution Principle

    Code that SOUNDs right may not be always the correct solution.

**I**nterface Segregation Principle

    No excessive code.

**D**ependency Inversion Principle

    Function caller should have the control over the function.

Remember these pointers for each code process to incorporate a neat, organized and
most importantly-- readable lines.

**MOVING ON**
-------------

What are the four object-oriented principles of programming?

**Encapsulation**

    Each object is kept private within a class, so other objects
    do not have direct access to this.

    To work around this, the objects can call the public functions
    called methods.

    Objects are managed through methods.

![encapsulation](/imgs/encap.png)

**Abstraction**

    Otherwise known as the natural extension of encapsulation.

    Codes can become long and overwhelming.
    
    One way to work around this is for each objects expose
    themselves to a high-level mechanism to use them.

    The mechanism hides the internal implementation details,
    and show the operations that are relevant for other objects.

![abstraction](/imgs/abstract.png)

**Inheritance**

    Objects may sometimes be similar to one another, but
    they are not the exact same.

    To work around this, create a (child) class by deriving
    from another (parent) class to form a hierarchy.

    Child class reuses the fields and methods of the parent
    class and implement its own unique code.

![inheritance](/imgs/inherit.png)

**Polymorphism**

    In Greek, it means "many shapes."

    To commit this, define a parent interface to be re-used
    that has common methods.

    Then, each child class implements its own versions
    of these common methods.

![polymorphism](/imgs/poly.png)

**REFERENCES**
--------------
https://thefullstack.xyz/solid-javascript/
https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/
https://www.javatpoint.com/javascript-oops-abstraction
https://www.phptpoint.com/javascript-abstraction/
