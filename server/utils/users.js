// The user object should have the following three properties:
// [{
//     id: '/#143h3294hf2',
//     name: 'SomeName',
//     room: 'SomeRoom'
// }]

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
}

module.exports = {Users};
