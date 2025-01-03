// server/src/auth/GraphicalAuth.js

const crypto = require('crypto');

class GraphicalAuth {
    constructor(config = {}) {
        this.config = {
            hashAlgorithm: 'sha512',
            roundingPrecision: 2,
            replayProtection: true,
            ...config,
        };
    }

    /**
     * Normalize the image sequence for consistent processing.
     * @param {Array} sequence - Array of points with x, y, and timestamp properties.
     * @returns {Array} Normalized sequence.
     */
    normalizeSequence(sequence) {
        if (!Array.isArray(sequence)) {
            throw new Error('Sequence must be an array of points.');
        }

        return sequence.map(point => {
            const { x, y, timestamp } = point;
            if (typeof x !== 'number' || typeof y !== 'number' || typeof timestamp !== 'number') {
                throw new Error('Each point must have numeric x, y, and timestamp properties.');
            }

            return {
                x: parseFloat(x.toFixed(this.config.roundingPrecision)),
                y: parseFloat(y.toFixed(this.config.roundingPrecision)),
                timestamp,
            };
        });
    }

    /**
     * Generate a hash for the normalized sequence.
     * @param {Array} normalizedSequence - The normalized sequence.
     * @returns {string} Hash of the sequence.
     */
    generateHash(normalizedSequence) {
        const hash = crypto.createHash(this.config.hashAlgorithm);
        hash.update(JSON.stringify(normalizedSequence));

        if (this.config.replayProtection) {
            const timestamp = Date.now().toString();
            hash.update(timestamp);
        }

        return hash.digest('base64');
    }

    /**
     * Process a graphical authentication sequence.
     * @param {Array} sequence - Raw sequence of points.
     * @returns {Object} Result with status, hash, and normalized sequence.
     */
    async processSequence(sequence) {
        try {
            const normalizedSequence = this.normalizeSequence(sequence);
            const hash = this.generateHash(normalizedSequence);

            return {
                status: 'success',
                hash,
                normalizedSequence,
            };
        } catch (error) {
            return {
                status: 'error',
                message: error.message,
            };
        }
    }
}

module.exports = GraphicalAuth;
