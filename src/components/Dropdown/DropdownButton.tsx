// texto que aparece no botao do dropdown
import styles from "./styles.module.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

type DropdownButtonProps = {
    toggle: () => void;
    open: boolean;
    children: string;
}

export default function DropdownButton({ children, open, toggle }: DropdownButtonProps) {
    return (
        <div
            onClick={toggle}
            className={`${styles.dropdownBtn} ${open ? styles.buttonOpen : null}`}
        >
            {children}
            <span className={styles.toggleIcon}>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>
    )
}