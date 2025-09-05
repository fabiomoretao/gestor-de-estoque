import type { ReactNode } from "react";
import styles from "./styles.module.css"


type DropdownContentProps = {
    children: ReactNode
    open: boolean
    toggle: () => void
}

//Container onde os itens do dropdown estarão
export default function DropdownContent({ children, open, toggle }: DropdownContentProps) {
    return (
        <div className={`${styles.dropdownContent} ${open ? styles.dropdownOpen : null}`} onClick={toggle}>
            {children}
        </div>
    )

}