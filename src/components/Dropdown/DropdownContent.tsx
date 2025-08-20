import type { ReactNode } from "react";
import "./styles.css"

type DropdownContentProps = {
    children: ReactNode;
    open: boolean;
}

//Container onde os itens do dropdown estarão
export default function DropdownContent({ children, open }: DropdownContentProps) {
    return (
        <div className={`dropdown-content ${open ? 'dropdown-open' : null}`}>
            {children}
        </div>
    )

}