//This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.


function typeValidation(variable, type) {
    if (typeof variable === type) {
        return true;
    }
    return false;
}

console.log(typeValidation(42, "number"));