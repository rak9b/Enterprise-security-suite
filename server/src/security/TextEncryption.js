// server/src/security/TextEncryption.js

const crypto = require('crypto');
const { promisify } = require('util');
const randomBytesAsync = promisify(crypto.randomBytes);

class TextEncryption {
    constructor() {
        this.supportedAlgorithms = new Map([
            ['AES-256-GCM', { keyLength: 32, ivLength: 12 }],
            ['ChaCha20-Poly1305', { keyLength: 32, ivLength: 12 }],
        ]);
    }

    /**
     * Encrypts data using the specified algorithm and key.
     * @param {string} data - The plaintext data to encrypt.
     * @param {string} algorithm - The encryption algorithm.
     * @param {Buffer} key - The encryption key.
     * @returns {Object} Encrypted data object.
     */
    async encrypt(data, algorithm, key) {
        const config = this.supportedAlgorithms.get(algorithm);
        if (!config) {
            throw new Error(`Unsupported algorithm: ${algorithm}`);
        }

        const iv = await randomBytesAsync(config.ivLength);
        const cipher = crypto.createCipheriv(algorithm, key, iv);

        const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
        const authTag = cipher.getAuthTag();

        return {
            algorithm,
            encryptedData: encrypted.toString('base64'),
            iv: iv.toString('base64'),
            authTag: authTag.toString('base64'),
        };
    }
}

module.exports = TextEncryption;
