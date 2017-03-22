const ChatApp = require('./chatApp');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

const chatOnMessage = (message) => {
  console.log(message);
};

const prepareAnswer = () => {
    console.log('Готовлюсь к ответу');
}

const setCloseTimeout = (chat, timeout, text) => {
    setTimeout( ()=> {
        console.log(text);
        chat.close();
    }, timeout );
}

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);

webinarChat.on('message', prepareAnswer); //1.1
vkChat.setMaxListeners(2);  //1.2
vkChat.on('message', prepareAnswer);  //1.3
vkChat.once('close', () => console.log('Чат вконтакте закрылся :('));   //2.2

// Закрыть вконтакте
setCloseTimeout(vkChat, 10000, 'Закрываю вконтакте...');

// Закрыть фейсбук
setCloseTimeout(facebookChat, 15000, 'Закрываю фейсбук, все внимание — вебинару!');

// Закрыть вебинар
setCloseTimeout(webinarChat, 30000, 'Закрываю вебинар!');