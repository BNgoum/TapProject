/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'username', 'password'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//