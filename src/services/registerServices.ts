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
        const response = await fetch(`http://localhost:3000/users/get-all`);
        if (!response.ok) {
            throw new Error('Erro ao buscar usuários');
        }
        return response.json();
    },

    updateUsers: async (id: string, formData: FormData) => {
        const response = await fetch(`${endpoint}/users/update/${id}`, {
            method: 'PATCH',
            body: formData, // Envia o FormData diretamente
            // NÃO coloque Content-Type, o browser define automaticamente!
        });
        
        if (!response.ok) {
            throw new Error('Erro ao atualizar usuário');
        }
        return response.json();
    },

    deleteUser: async(id: string) => {
        const response = await fetch(`${endpoint}/users/delete/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar usuário');
        }
        return response.json();
    },
}
