const Joy = require("@hapi/joi")

const register = Joy.object({
    email: Joy.string().required(),
    name: Joy.string().required(),
    password: Joy.string().required
});

const login = Joy.object({
    email: Joy.string().required(),
    password: Joy.string().required(),
});

module.exports = {register, login}