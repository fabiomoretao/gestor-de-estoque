import "./style.css"
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
            className={`dropdown-btn ${open ? 'button-open' : null}`}
        >
            {children}
            <span className="toggle-icon">{open ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>
    )
}