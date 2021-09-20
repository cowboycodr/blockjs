const { Block, Component } = require('./core/block');

let welcomeMessage = new Component('WelcomeMessage', {
    template: '<h1 style="text-align:center;font-family:Arial">Welcome to Block.js!</h1>'
});

new Block('#app', {
    template: '<WelcomeMessage />',
    components: [
        welcomeMessage
    ]
})