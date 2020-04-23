const mega = require('megajs');

let storage = new mega.Storage(({
    email: EMAIL,
    password: PASSWORD,
    autologin: true
}), () => {
    console.log('callback');
})