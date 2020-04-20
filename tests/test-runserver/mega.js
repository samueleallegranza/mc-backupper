const mega = require('megajs');

const EMAIL = 'goproContainer1@yandex.com';
const PASSWORD = 'goproContainer!';

let storage = new mega.Storage(({
    email: EMAIL,
    password: PASSWORD,
    autologin: true
}), () => {
    console.log('callback');
})