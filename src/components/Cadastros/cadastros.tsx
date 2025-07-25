'use client'

import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { registerServices } from "@/services/registerServices";

interface ICadastrosProps{
    cadastros: [string, string, string, number, string][];
    onUpdate: () => void;
}

export default function Cadastros({ cadastros, onUpdate }: ICadastrosProps){

    const [editando, setEditando] = useState(false);
    const [deletando, setDeletando] = useState(false);
    const [editandoId, setEditandoId] = useState<string | null>(null);
    const [deletandoId, setDeletandoId] = useState<string | null>(null);
    const apiUrl = 'http://localhost:3000'

    async function handleEditSubmit(e: React.FormEvent<HTMLFormElement>, id: string) {
        e.preventDefault()
        setEditando(true);

        const formData = new FormData(e.currentTarget);

        try{
            await registerServices.updateUsers(id, formData);
            alert("Cadastro atualizado com sucesso!");
            onUpdate(); // Atualiza a lista de cadastros
            setEditandoId(null); 
        } catch(error){
            console.error("Erro ao atualizar cadastro:", error);
            setEditando(false);
            alert("Erro ao atualizar cadastro!");
        } finally{
            setEditando(false); // Reseta o estado de edição
        }
    }

    async function handleDelete(id: string){
        setDeletando(true);
        try{
            await registerServices.deleteUser(id)
            alert("usuario deletado com sucesso")
            onUpdate()
            setDeletandoId(null);
        } catch(e){
            console.log(e)
            alert("Erro ao deletar cadastro!")
        } finally{
            setEditando(false); // Reseta o estado de edição
        }
    }

    return (
        <div className="flex flex-col gap-4 md:max-h-[73vh] overflow-y-auto">
    {cadastros.map(([id, nome, profissao, idade, imagem], idx) => {
        const imagePath = imagem ? imagem.replace(/\\/g, '/') : '';
        const imagemUrl = `${apiUrl}/${imagePath}`;
       

        return (
        <article key={idx} className="bg-[var(--card)] text-[var(--foreground)] p-4 rounded-lg shadow-md flex items-center gap-4">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
                <Image src={imagemUrl} alt={nome} width={100} height={100} className="object-cover w-full h-full" />
            </div>
                    <div className="flex-1">
                        <p className="font-bold text-lg">{nome}</p>
                        <p className="text-[var(--text-tertiary)]">{profissao}</p>
                        <p className="text-[var(--text-tertiary)]">Idade: {idade}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Dialog
                        open={editandoId === id}
                        onOpenChange={open => setEditandoId(open ? id : null)}>
                            <DialogTrigger asChild>
                                <button className="bg-[var(--neural-blue)] text-black px-3 py-1 rounded cursor-pointer">Editar</button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[350px]">
                                <form
                                onSubmit={(e) => handleEditSubmit(e, id)}>
                                <DialogHeader>
                                    <DialogTitle>Editar Cadastro</DialogTitle>
                                    <DialogDescription>
                                        Edite as informações de <span className="font-bold">{nome}</span>.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4">
                                            <div className="grid gap-3 mt-2">
                                              <Label htmlFor="name-editado">Nome</Label>
                                              <Input id="name-editado" name="userName" defaultValue={nome} required />
                                            </div>
                                            <div className="grid gap-3">
                                              <Label htmlFor="profissão-editada"> Profissão </Label>
                                              <Input id="profissão-editada" name="profession" defaultValue={profissao} required />
                                            </div>
                                            <div className="grid gap-3">
                                              <Label htmlFor="idade-editada"> Idade </Label>
                                              <Input id="idade-editada" name="age" type="number" defaultValue={idade} required />
                                            </div>
                                            <div className="grid gap-3">
                                              <Label htmlFor="imagem-editada">Foto</Label>
                                              <input
                                                id="imagem-editada"
                                                name="file"
                                                type="file"
                                                accept="image/*"
                                                className="block w-full text-sm text-[var(--foreground)] file:mr-4 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--neural-blue)] file:text-black hover:file:bg-[var(--neural-cyan)] transition-colors"
                                              />
                                            </div>
                                          </div>
                                <DialogFooter
                                className="mt-2">
                                    <DialogClose asChild>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-[var(--neural-orange)] cursor-pointer transition-colors">Fechar</button>
                                    </DialogClose>
                                    <button type="submit"
                                    className="bg-[var(--neural-blue)] text-black px-4 py-2 rounded-md hover:bg-[var(--neural-cyan)] cursor-pointer transition-colors">
                                        { editando ? "Salvando..." : "Salvar" }
                                    </button>
                                </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                        <Dialog
                        open={deletandoId === id}
                        onOpenChange={open => setDeletandoId(open ? id : null)}
                        >
                            <DialogTrigger asChild>
                                <button className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Excluir</button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[350px]">
                                <DialogHeader>
                                    <DialogTitle>Excluir Cadastro</DialogTitle>
                                    <DialogDescription>
                                        Tem certeza que deseja excluir <span className="font-bold">{nome}</span>?
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Cancelar</button>
                                    </DialogClose>
                                    <button className="bg-[var(--neural-blue)] text-black px-3 py-1 rounded cursor-pointer"
                                    onClick={() => handleDelete(id)}>
                                        {deletando ? "Excluindo..." : "Excluir"}
                                    </button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </article>
                );
            })}
        </div>
    );
}