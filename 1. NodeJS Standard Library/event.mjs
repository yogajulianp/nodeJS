import {EventEmitter} from "events";

const myEmitter = new EventEmitter();

myEmitter.addListener("greeting", (name)=> {
    console.log(`Selamat datang ${name}`);
})

myEmitter.addListener("greeting",function sayGreeting(name, kelas) {
    console.log(`Selamat datang ${name} di kelas ${kelas}`);
})

console.log(myEmitter.listeners("greeting"))
myEmitter.emit("greeting", "Yoga", 15)


// First listener
myEmitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
    console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
}); 
console.log(myEmitter.listeners('event'));
  
myEmitter.emit('event', 1, 2, 3, 4, 5);