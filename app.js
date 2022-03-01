
const EventEmitter = require('events');
const emitter = new EventEmitter();


// register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

// raised event
emitter.emit('messageLogged', { id: 1, url:'http://'});

//raise: logging (date: message)
