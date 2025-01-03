# server/README.md

# Server Module for Enterprise Security Suite

This directory contains the backend components of the Enterprise Security Suite. The server module provides robust security functionalities, including encryption, RFID blocking, graphical authentication, and penetration testing tools.

## Project Structure

```
server/
├── src/
│   ├── auth/
│   │   └── GraphicalAuth.js       # Handles graphical authentication workflows
│   ├── security/
│   │   ├── TextEncryption.js     # Provides text encryption utilities
│   │   ├── RFIDBlocker.js        # Implements RFID signal blocking
│   │   └── PenetrationTesting.js # Simulates penetration testing on targets
│   └── index.js                  # Entry point for server setup
├── tests/
│   └── integration/              # Integration test cases
├── package.json                  # Node.js dependencies and metadata
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
To start the server, use the following command:
```bash
node src/index.js
```

## Testing
Integration tests are located in the `tests/integration` directory. To run the tests:
```bash
npm test
```

## Modules Overview

### Authentication
- **GraphicalAuth.js**:
  Implements secure graphical password authentication by normalizing input data, hashing it with replay protection, and verifying sequences.

### Security
- **TextEncryption.js**:
  Provides encryption and decryption capabilities for secure text data handling.

- **RFIDBlocker.js**:
  Monitors RFID frequencies and detects unauthorized signals, emitting warnings for potential threats.

- **PenetrationTesting.js**:
  Simulates penetration tests on defined targets to identify vulnerabilities and generate detailed reports.

## Contributions
Contributions are welcome. Please refer to the main `CONTRIBUTING.md` file in the root directory for guidelines.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
