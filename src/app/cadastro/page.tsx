'use client';

import { useEffect, useState } from "react";

import { DialogComponent } from "@/components/Dialog/dialog";
import HeaderCadastro from "@/components/Header/headerCadastro";
import SemCadastros from "../../components/SemCadastros/semCadastros";
import Cadastros from "@/components/Cadastros/cadastros";
import { registerServices } from "@/services/registerServices";
import LoadingComponent from "@/components/Loading/loading";

type User = {
    id: string; // ID do usuário
    userName: string;
    profession: string;
    age: number;
    faceFilePath: string; // URL da imagem do usuário   
};

export default function Cadastro(){

    const [users, setUsers] = useState<User[]>([]); // Inicializa o estado para armazenar os usuários
    const [loading, setLoading] = useState(true)
    const [erro, setErro ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const allUsers = await registerServices.getAllUsers();
                setUsers(allUsers);
            }catch (e) {
                setErro(true)
                console.error("Erro ao buscar usuários:", e);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, []);


    if(loading){
        return(
            <LoadingComponent/>
        )
    }

    
    if (erro) {
        return (
            <main className="w-full h-screen flex flex-col items-center justify-center text-[hsl(var(--foreground))]">
                <p className="text-red-500 text-lg mt-8 text-center">Erro ao carregar os dados. Tente novamente mais tarde.</p>
            </main>
        );
    }

    return(
        <main
        className=" w-full h-screen flex flex-col items-center text-[hsl(var(--foreground))]">
            <HeaderCadastro/>
            <section
            className="w-full md:w-[85vw] h-full flex flex-col">
            <div className="flex justify-between items-center p-4 mt-4 md:pl-10 text-[var(--foreground)]">
                <div>
                    <p
                    className="text-[var(--text-primary)] text-[20px] font-semibold">
                        Pessoas Autorizadas
                    </p>
                    <p
                    className="text-[var(--text-tertiary)] text-[16px]">
                        {users.length} Pessoas Cadastradas
                    </p>
                </div>

                <DialogComponent
                onRegister={
                    async () => {
                        const allUsers = await registerServices.getAllUsers();
                        setUsers(allUsers);
                    }}
                />
            </div>

            <div
            className="p-2">
                { users.length > 0 ? 
                <Cadastros 
                cadastros={users.map(c => [c.id, c.userName, c.profession, c.age, c.faceFilePath])}
                onUpdate={async () => {
                    const allUsers = await registerServices.getAllUsers();
                    setUsers(allUsers);
                }}
                /> : <SemCadastros/> }
            </div>
            </section>
        </main>
    )
}