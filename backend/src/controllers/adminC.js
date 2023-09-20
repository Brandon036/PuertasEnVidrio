const { admin } = require('../db')


const findAdminName = async (email, password) => {
    const exist = await admin.findOne({ where: { email: email } });
    if (exist) {
        if (exist.password === password && exist.email === email ) {
            login = true;
            return login;
        } else {
            login = false;
            throw Error(`Password Incorrecta`);
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