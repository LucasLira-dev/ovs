
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
import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMdAdd } from "react-icons/io"

import { registerServices } from "@/services/registerServices"

export function DialogComponent() {

  const [open, setOpen] = useState(false);
  const [salvando, setSalvando] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSalvando(true); // Indica que o salvamento está em progresso

    const formData = new FormData(event.currentTarget); //pega os dados do formulário
    if(
      !formData.get('name') ||
      !formData.get('profissão') ||
      !formData.get('idade') ||
      !formData.get('imagem')
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      setSalvando(false); // Reseta o estado de salvamento
      return;
    }
    
    try {
      await registerServices.createUser(formData); // Envia os dados do formulário para o serviço de registro
      alert("Cadastro realizado com sucesso!"); // Mensagem de sucesso
      setOpen(false); // fecha o dialog
      event.currentTarget.reset(); // Limpa os campos do formulário
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Ocorreu um erro ao cadastrar o usuário.");
    } finally {
      setSalvando(false); // Reseta o estado de salvamento
      
    }

    

    setOpen(false); // fecha o dialog
    setSalvando(false); // Reseta o estado de salvamento
    alert("Cadastro realizado com sucesso!"); // Mensagem de sucesso
    event.currentTarget.reset(); // Limpa os campos do formulário
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="bg-[var(--neural-blue)] text-black px-4 py-2 rounded-md hover:bg-[var(--neural-cyan)] cursor-pointer transition-colors flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <IoMdAdd className="inline-block" />
            <p className="hidden md:block">Adicionar Pessoa</p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle> Novo Membro </DialogTitle>
            <DialogDescription>
              Adicione um novo membro à sua equipe. Preencha os campos abaixo com as informações necessárias.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nome</Label>
              <Input id="name-1" name="name" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="profissão-1"> Profissão </Label>
              <Input id="profissão-1" name="profissão" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="idade-1"> Idade </Label>
              <Input id="idade-1" name="idade" type="number" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="imagem-1">Foto</Label>
              <input
                id="imagem-1"
                name="imagem"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-[var(--foreground)] file:mr-4 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--neural-blue)] file:text-black hover:file:bg-[var(--neural-cyan)] transition-colors"
              />
            </div>
          </div>
          <DialogFooter
          className="mt-2">
            <DialogClose asChild>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-[var(--neural-orange)] cursor-pointer transition-colors"
              >
                Cancelar
              </button>
            </DialogClose>
            <button type="submit"
              className="bg-[var(--neural-blue)] text-black px-4 py-2 rounded-md hover:bg-[var(--neural-cyan)] cursor-pointer transition-colors">
              { salvando ? "Salvando..." : "Salvar" }
            </button>
          </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  );
}
