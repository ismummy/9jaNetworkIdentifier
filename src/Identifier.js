const verifier = require('./Network')

class Identifier {
    static verifyNumber = (number) => {
        const network = verifier.getNetwork(number);
        return {
            number,
            network
        }
    }

    static verifyNumbers(numbers) {
        if (numbers instanceof Array) {
            const result = [];

            numbers.map(number => result.push(Identifier.verifyNumber(number)));

            return result;
        } else {
            return Identifier.verifyNumber(numbers)
        }
    }
}

module.exports = Identifier