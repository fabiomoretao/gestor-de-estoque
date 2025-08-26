import { Link } from "react-router-dom"
import styles from "./styles.module.css"

type ButtonProp = {
  route: string
  className: string
  text: string
}
export default function Button({ route, className, text }: ButtonProp) {
  return (
    <Link className={` ${className}`} to={route}>
      <button className={styles.button}>{text}</button>
    </Link>
  )
}
