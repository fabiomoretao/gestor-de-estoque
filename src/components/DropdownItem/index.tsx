import "./styles.css"

type DropdownItemsProps = {
    children: React.JSX.Element;

}

export default function DropdownItems({ children }: DropdownItemsProps) {
    return (
        <div className="dropdown-item" >
            {children}
        </div>
    )
}