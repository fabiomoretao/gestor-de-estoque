import { Link } from "react-router-dom"
import styles from "./styles.module.css"

type ButtonProp = {
  route?: string
  className?: string
  text: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
export default function Button({ route, className, text, type, onClick }: ButtonProp) {
  const button = (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>)

  return route ? <Link to={route}>{button}</Link> : button
}
