/**
 * 
 * Soruce : https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption
 */
var _secretKey = "some-unique-key";
 
var simpleCrypto = new SimpleCrypto(_secretKey);
 
var plainText = "Hello World!";
var chiperText = simpleCrypto.encrypt(plainText);
console.log("Encryption process...");
console.log("Plain Text    : " + plainText);
console.log("Cipher Text   : " + cipherText);
var decipherText = simpleCrypto.decrypt(cipherText);
console.log("... and then decryption...");
console.log("Decipher Text : " + decipherText);
console.log("... done.");

