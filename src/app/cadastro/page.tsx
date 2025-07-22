'use client';

// import { useState } from "react";

import { DialogComponent } from "@/components/Dialog/dialog";
import HeaderCadastro from "@/components/Header/headerCadastro";
import SemCadastros from "../../components/SemCadastros/semCadastros";
import Cadastros from "@/components/Cadastros/cadastros";

export default function Cadastro(){

    const fakeCadastros = [
      {
        name: "João Silva",
        profession: "Engenheiro",
        age: 32,
        imagem: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        name: "Maria Souza",
        profession: "Designer",
        age: 28,
        imagem: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        name: "Carlos Lima",
        profession: "Desenvolvedor",
        age: 25,
        imagem: "https://randomuser.me/api/portraits/men/3.jpg"
      },
        {
            name: "Ana Costa",
            profession: "Gerente de Projetos",
            age: 30,
            imagem: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name: "Lucas Pereira",
            profession: "Analista de Dados",
            age: 27,
            imagem: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name: "Fernanda Rocha",
            profession: "Arquiteta",
            age: 29,
            imagem: "https://randomuser.me/api/portraits/women/6.jpg"
        },
        {
            name: "Ricardo Almeida",
            profession: "Médico",
            age: 35,
            imagem: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            name: "Patrícia Martins",
            profession: "Professora",
            age: 31,
            imagem: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
            name: "Eduardo Santos",
            profession: "Fotógrafo",
            age: 26,
            imagem: "https://randomuser.me/api/portraits/men/9.jpg"
        }
    ];

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
                        {fakeCadastros.length} Pessoas Cadastradas
                    </p>
                </div>

                <DialogComponent />
            </div>

            <div
            className="p-2">
                { fakeCadastros.length > 0 ? <Cadastros cadastros={fakeCadastros.map(c => [c.name, c.profession, c.age, c.imagem])}/> : <SemCadastros/> }
            </div>
            </section>
        </main>
    )
}