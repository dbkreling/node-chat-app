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
    removeUser (id) {
        //return user that was removed
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id)
        }

        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0]; // return the id
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
