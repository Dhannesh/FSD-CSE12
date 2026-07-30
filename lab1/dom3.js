import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});

button.emit("click", "Raju");
button.emit("click", "Kaju");
button.emit("click", "Rani ");
button.emit("click");
