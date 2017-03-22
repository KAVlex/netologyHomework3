"use strict"

const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */
    constructor(title) {
        super();

        this.title = title;

        // Посылать каждую секунду сообщение
        this.intervalId = setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
        }, 1000);
    }

    close(){    //2.1
        clearInterval(this.intervalId);
        this.emit('close');
        this.removeAllListeners();
    }
}

module.exports = ChatApp;