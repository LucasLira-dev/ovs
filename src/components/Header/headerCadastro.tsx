import { IoArrowBackSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";


export default function HeaderCadastro(){
    return(
        <header
        className="w-full h-16 flex items-center justify-between md:justify-start gap-6 p-4 md:pl-25 bg-[var(--card)] text-[var(--foreground)]">
            <Link href="/"
            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium flex items-center">
                <IoArrowBackSharp className="inline-block mr-2" />
                Voltar
            </Link>

            <div className="flex items-center text-[var(--neural-blue)] font-semibold text-[24px]">
                <span className="block md:hidden">
                  <FaRegUser className="inline-block mr-2" />
                  Cadastros
                </span>
                <span className="hidden md:flex items-center">
                  <FaRegUser className="inline-block mr-2" />
                  Gerenciar Cadastros
                </span>
            </div>
        </header>
    )
}