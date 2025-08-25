// cada opcao individual do dropdown

import "./styles.css"

type DropdownItemsProps = {
    children: React.JSX.Element
    onClick: () => void
}

export default function DropdownItems({ children, onClick }: DropdownItemsProps) {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    )
}