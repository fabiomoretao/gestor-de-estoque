// cada opcao individual do dropdown

import styles from "./styles.module.css"

type DropdownItemsProps = {
    children: React.JSX.Element
    onClick: () => void
}

export default function DropdownItems({ children, onClick }: DropdownItemsProps) {
    return (
        <div className={styles.dropdownItem} onClick={onClick}>
            {children}
        </div>
    )
}