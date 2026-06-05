// reate a class called Counter.

//     Requirements
// Methods:
// increment()
// decrement()
// reset()
// getValue()
// Rules
// Value starts at 0
// Must update internal state
// Example
// const counter = new Counter();

// counter.increment();
// counter.increment();
// counter.decrement();

// counter.getValue();

class counters{
    constructor(){
        this.count=0;
    }
    increment(){
       this.count++;
       return this.count;
    }
    decrement(){
       this.count--;
       return this.count;
    }
    reset(){
        this.count = 0;
        return this.count;
    }
    getValue(){
        return this.count;
    }
}
const counter=new counters();
counter.increment();
 counter.increment();
  counter.decrement();

console.log(counter.getValue()); 