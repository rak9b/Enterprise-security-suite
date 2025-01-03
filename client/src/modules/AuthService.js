class AuthService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    login(credentials) {
        return this.apiClient.post('/auth/login', credentials);
    }

    logout() {
        return this.apiClient.post('/auth/logout');
    }
}

export default AuthService;
