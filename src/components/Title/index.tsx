import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { FaCircleArrowLeft } from "react-icons/fa6"

type TitleProps = {
    title: string
    link?: string
}

export default function Title({ title, link }: TitleProps) {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            {link ?
                <Link to={link} className={styles.link}>
                    <div className={styles.return}>
                        <FaCircleArrowLeft fontSize={"32px"} />
                        <p>Voltar</p>
                    </div>
                </Link>
                : null}
        </div>
    )
}