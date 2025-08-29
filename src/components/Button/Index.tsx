import { Link } from "react-router-dom"
import styles from "./styles.module.css"

type ButtonProp = {
  text: string
  link?: string
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  removeBtn?: boolean
}
export default function Button({ link, className, text, type, removeBtn, onClick }: ButtonProp) {
  const button = (
    <button
      className={`${styles.button} ${removeBtn ? styles.removeBtn : null} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>)

  return link ? <Link to={link}>{button}</Link> : button
}
