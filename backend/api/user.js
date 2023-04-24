const bcrypt = require('bcrypt-nodejs')
const passport = require('passport')

module.exports = app => {
    const{ existOrError, notExistsOrError,  equalsOrError} = app.api.validation
     
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }




    const save = async (req, res) =>{
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id

        try{
            existOrError(user.name, "")
            existOrError(user.email, "")
            existOrError(user.password, "")
            existOrError(user.confirmPassword, "")
            existOrError(user.password, user.confirmPassword, 
                'Senhas não conferem'
                )

            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            if(!user.id){           
            notExistsOrError(userFromDB, 'Usuário já cadastrado')
        }
        catch(msg) {
            
        }
    }
    }

    return { save }
}