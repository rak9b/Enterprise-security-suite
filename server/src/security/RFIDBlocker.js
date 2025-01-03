// server/src/security/RFIDBlocker.js

const { EventEmitter } = require('events');

class RFIDBlocker {
    constructor(frequencies) {
        this.frequencies = new Set(frequencies || ['13.56MHz', '125kHz', '860-960MHz']);
        this.eventEmitter = new EventEmitter();
    }

    /**
     * Initialize RFID protection by simulating signal monitoring.
     */
    initialize() {
        console.log('RFID blocker initialized for frequencies:', Array.from(this.frequencies));
        this.eventEmitter.emit('initialized');
    }

    /**
     * Simulates signal detection and alerts listeners if interference is detected.
     * @param {string} signalFrequency - The frequency of the detected signal.
     */
    detectSignal(signalFrequency) {
        if (this.frequencies.has(signalFrequency)) {
            console.warn(`Warning: Detected interference on ${signalFrequency}`);
            this.eventEmitter.emit('interference', signalFrequency);
        } else {
            console.log(`Signal on ${signalFrequency} is within safe bounds.`);
        }
    }
}

module.exports = RFIDBlocker;
