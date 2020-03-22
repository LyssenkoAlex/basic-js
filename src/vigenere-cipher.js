class VigenereCipheringMachine {
    const
    ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    constructor(isReverse = true) {
        this.isReverse = isReverse;
    }

    encrypt(message, key) {
        let count = 0;
        key = key.repeat(message.length / key.length + 1).toLowerCase()
        let encryptMessage = message.toLowerCase().split('').map((item, index) => {
            if (/[A-Za-z]/.test(item)) {
                let letterPosition = this.ALPHABET.indexOf(item) + this.ALPHABET.indexOf(key[count]);
                count++;
                return this.ALPHABET[letterPosition % this.ALPHABET.length]
            } else return item
        });
        if (this.isReverse) return encryptMessage.join('').toUpperCase()
        return encryptMessage.reverse().join('').toUpperCase()
    }

    decrypt(code, key) {
        let count = 0;
        key = key.repeat(code.length / key.length + 1).toLowerCase()
        let decryptCode = code.toLowerCase().split('').map((item, index) => {
            if (/[A-Za-z]/.test(item)) {
                let letterNumber = 26 + this.ALPHABET.indexOf(item) - this.ALPHABET.indexOf(key[count]);
                count++;
                return this.ALPHABET[letterNumber % this.ALPHABET.length]
            } else return item
        });
        if (this.isReverse) return decryptCode.join('').toUpperCase();
        return decryptCode.reverse().join('').toUpperCase();

    }
}

module.exports = VigenereCipheringMachine;
