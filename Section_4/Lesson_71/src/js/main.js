function myModule() {
    this.hello = function(){
        console.log("Hello");
    };

    this.goodbye = function(){
        console.log("Good bye");
    };
}

module.exports = myModule;