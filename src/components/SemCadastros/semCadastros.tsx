import { FaRegUser } from "react-icons/fa";

export default function SemCadastros() {
    return(
        <article
        className="p-4 h-80 flex flex-col items-center justify-center bg-[var(--card)] text-[var(--text-tertiary)] rounded-lg">
            <FaRegUser className="text-[var(--text-tertiary)] text-[100px] mx-auto " />
            <h2
            className="text-[var(--text-tertiary)] text-center text-[24px] font-semibold mt-4">
                Nenhuma Pessoa Cadastrada
            </h2>
            <p
            className="text-center text-[16px] mt-2 ">
                Adicione pessoas autorizadas para visualizar e gerenciar os cadastros.
            </p>
        </article>
    )
}
