function validate(variable, value) {
    if (variable) {
        return variable;
    } else {
        return value;
    }
}

export { validate };