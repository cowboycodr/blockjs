const { validate } = require('./utils');
 
class Component {
    constructor(name, { template, components, props }) {
        this._name = name;
        
        this._template = validate(template, '');
        this._components = validate(components, []);
        this._props = validate(props, {});
    }

    get name() {
        return this._name;
    }

    get components() {
        return this._components;
    }

    get props() {
        return this._props;
    }

    get template() {
        let template = this._template;

        // Component replacement
        template = new DOMParser().parseFromString(template, 'text/html');

        this.components.forEach(component => {
            let matches = template.querySelectorAll(component.name);

            matches.forEach(match => {
                match.replaceWith(component.template);
            });
        });

        return template.body.firstChild;
    }
}

export { Component };