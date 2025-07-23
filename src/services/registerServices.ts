const endpoint = process.env.API_URL || 'http://localhost:3000';

// export const registerServices = {
//     createUser: async (userData: { userName: string; age: number; profession: string; image: File }) => {
//         const response = await fetch(`${endpoint}/users/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });
//         return response.json();
//     },
//     // Adicione outros métodos de serviço conforme necessário
// } 


export const registerServices = {
    createUser: async (formData: FormData) => {
        const response = await fetch(`${endpoint}/users/register`, {
            method: 'POST',
            body: formData, // Envia o FormData diretamente
            // NÃO coloque Content-Type, o browser define automaticamente!
        });
        
        return response.json();
    },
    // Adicione outros métodos de serviço conforme necessário
    getAllUsers: async () =>{
        const response = await fetch(`http://localhost:3000/users/all-users`);
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        return response.json();
    }
}