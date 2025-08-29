import { Link } from "react-router-dom"
import styles from "./styles.module.css"

type ButtonProp = {
  link?: string
  className?: string
  text: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
export default function Button({ link, className, text, type, onClick }: ButtonProp) {
  const button = (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>)

  return link ? <Link to={link}>{button}</Link> : button
}
