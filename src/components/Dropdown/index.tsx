import { useEffect, useRef, useState, type ReactNode } from "react";
import DropdownButton from "../DropdownButton"
import DropdownContent from "../DropdownContent";

export type DropdownProps = {
    buttonText: string;
    content: ReactNode;
}

export default function Dropdown({ buttonText, content }: DropdownProps) {
    const [open, setOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)

    //Deixa o dropdown reativo, se nao tiver espaco em baixo, o dropdown sobe
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
            >
                {content}
            </DropdownContent>
        </div>
    )
}