//what is the output?

var hero = {
    _name: "john doe",
    getSecretIdentity: function() {
        return this._name;
    }
};

var stoleSecretIdentitiy = hero.getSecretIdentity;

console.log(stoleSecretIdentitiy());
console.log(getSecretIdentity());