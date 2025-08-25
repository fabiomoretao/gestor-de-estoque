// contem as opcoes e o botao do dropdown e controla o seu comportamento
import { useEffect, useRef, useState, type ReactNode } from "react";
import DropdownButton from "./DropdownButton"
import DropdownContent from "./DropdownContent";

export type DropdownProps = {
    buttonText: string;
    content: ReactNode;
}

export default function DropdownContainer({ buttonText, content }: DropdownProps) {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const toggleDropdown = () => {
        setOpen((open) => !open)
    }

    // Ao clicar em qualquer lugar que nao seja a div do dropdown, o dropdown é fechado
    useEffect(() => {
        const handler = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("click", handler)

        return () => {
            document.removeEventListener("click", handler)
        }

    }, [dropdownRef])

    return (
        <div ref={dropdownRef}>
            <DropdownButton
                toggle={toggleDropdown}
                open={open}
            >
                {buttonText}
            </DropdownButton>
            <DropdownContent
                open={open}
                toggle={toggleDropdown}
            >
                {content}
            </DropdownContent>
        </div>
    )
}