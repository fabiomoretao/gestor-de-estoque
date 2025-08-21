import type { ReactNode } from "react";
import "./styles.css"

type DropdownContentProps = {
    children: ReactNode
    open: boolean
    toggle: () => void
}

//Container onde os itens do dropdown estarão
export default function DropdownContent({ children, open, toggle }: DropdownContentProps) {
    return (
        <div className={`dropdown-content ${open ? 'dropdown-open' : null}`} onClick={toggle}>
            {children}
        </div>
    )

}