const EventEmitter = require("events");
console.log(EventEmitter);

const emitter = new EventEmitter();

console.log(emitter);

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "Nadeem");
