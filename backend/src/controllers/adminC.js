const { admin } = require('../db')


const findAdminName = async (name, password) => {
    const exist = await admin.findOne({ where: { name: name } });
    if (exist) {
        if (exist.password === password) {
            login = true;
            return login;
        } else {
            login = false;
            return (`Contraseña Incorrecta`);
        }
    } else {
        login = false;
        throw Error(`Usuario Incorrecto`);
    }
}

const adminH  = async ()=> { 
    const adminOne = await admin.findAll()
return adminOne ;
}

const createAdmin = async ( name, email, password) => {
    const oneUser = await admin.create({ name, email, password})
    return oneUser
}

module.exports = { createAdmin, adminH, findAdminName }