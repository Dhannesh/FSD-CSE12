# EventLoop

JS is synchronous and single threaded bydefault

## There can be async behaviour

- with BrowserAPI - setTimeout, setInterval, setImmediate, nextTick
- with promises
- with event handlers

MOdern JS is of two types

1. CommonJS (.cjs) -> supports OOPS -> require
   - priority (nextTick, Promise, setImmediate/setTimeout)
2. ModuleJS (.mjs) -> follow modular approach -> import
   - priority (Promise, nextTick, setImmediate/setTimeout)
