const userInfo = require("./information")
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${userInfo.myInfo.name} from ${userInfo.myInfo.campus}`,
}));