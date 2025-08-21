type InputProps = {
    label: string
    name: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    value: string
}


export default function Input({ label, name, onChange, type, value }: InputProps) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}