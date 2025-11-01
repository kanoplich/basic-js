const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = [];
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      if (this.alphabet.includes(upperMessage[i])) {
        let index =
          (this.alphabet.indexOf(upperMessage[i]) +
            this.alphabet.indexOf(upperKey[keyIndex % upperKey.length])) %
          this.alphabet.length;
        result.push(this.alphabet[index]);
        keyIndex++;
      } else {
        result.push(upperMessage[i]);
      }
    }

    return this.reverse ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = [];
    const upperEncryptedMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < upperEncryptedMessage.length; i++) {
      if (this.alphabet.includes(upperEncryptedMessage[i])) {
        let index =
          (this.alphabet.indexOf(upperEncryptedMessage[i]) -
            this.alphabet.indexOf(upperKey[keyIndex % upperKey.length]) +
            this.alphabet.length) %
          this.alphabet.length;
        result.push(this.alphabet[index]);
        keyIndex++;
      } else {
        result.push(upperEncryptedMessage[i]);
      }
    }

    return this.reverse ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
