const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { GraphicalAuth } = require('./auth/GraphicalAuth');
const { TextEncryption } = require('./security/TextEncryption');
const { RFIDBlocker } = require('./security/RFIDBlocker');
const { PenetrationTesting } = require('./security/PenetrationTesting');
