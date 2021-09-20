const { validate } = require('./utils');
const { Component } = require('./component');

class Block extends Component {
    constructor(target, { template, components}) {
        super('BLOCK', {template, components});

        this._target = document.querySelector(target);
        this._target.appendChild(this.template);
    }
}

export { Block, Component };