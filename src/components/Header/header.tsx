import Image from "next/image";

export default function Header() {
    return (
        <header
            className="w-full h-18 flex items-center justify-between md:justify-start lg:pl-8 bg-[var(--card)] text-[var(--foreground)]">
            <div
            className="flex items-center p-4">
                <Image 
                    src="/ovsImage.png"
                    alt="Logo"
                    className="w-20 h-20"
                    width={50}
                    height={50}
                />
                <div className="flex flex-col">
                    <h1
                    className="font-semibold text-[24px] text-[var(--neural-blue)]"
                    >
                        OVS
                    </h1>
                    <p
                    className="text-[var(--text-secondary)] text-[16px]">
                        OPTICAL VIGILANCE SYSTEM
                    </p>
                </div>
            </div>
        </header>
    )
}