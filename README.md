# encode-encrypt-hash-file-cli

A simple wrapper of the crypto node library to provide a simple cli for encoding, encrypting and hashing files.

NOTE: This is just for fun and an exercise in writing node.js NOT a considered approach to good encryption. DO NOT USE THIS for anything you seriously need hidden.

## usage:

command line example: `node index operation input-filename output-filename [password]`

available operations: `[encrypt, decrypt, hashmd5, hashsha1, hashsha256, base64encode, base64decode, rot13]`

password optional, required for encryption/ decryption operations

## notes:

 * NOTE: This is just for fun and an exercise in writing node.js NOT a considered approach to good encryption. DO NOT USE THIS for anything you seriously need hidden.
 * Example of why this is for FUN only: I am not a security expert by any stretch. I am just forcing 1 particular encryption mode: CTR. I am not even allowing you to pass in an IV. It is likely then that this is not the best encryption mode/ automatically generated IV for your use case.
 * Node.js's crypto library is just a wrapper around OpenSSL. If you have problems you probably don't have this installed on your system. Especially if you are a Windows user.
 * Encryption/ decryption uses the AES256-CTR cipher.
 * If you want a secure hashing algorithm only use SHA256. MD5 and SHA1 are only there for educational purposes.
 * Rot13 is just there for a bit of fun. yes that IS my idea of fun.
