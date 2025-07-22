const endpoint = process.env.API_URL || 'http://localhost:3000';

export const registerServices = {
    createUser: async (userData: { userName: string; age: number; profession: string }) => {
        const response = await fetch(`${endpoint}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    },
    // Adicione outros métodos de serviço conforme necessário
}