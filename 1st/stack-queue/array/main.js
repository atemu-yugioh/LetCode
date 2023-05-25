const QueueArray = require("./queueArray");
const StackArray = require("./stackArray");

const stackNumber = new StackArray();
const queueNumber = new QueueArray();
// Stack
// stackNumber.show();
// console.log(stackNumber.isEmpty());

// Queue
queueNumber.enqueue(0);
queueNumber.enqueue(1);
queueNumber.enqueue(2);
queueNumber.show();
