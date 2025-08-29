import type { IconType } from "react-icons";
import styles from "./styles.module.css"

type CardProps = {
    icon: IconType;
    title: string;
    text: string | number,
}

export default function Card({ text, icon: Icon, title }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <Icon />
                <p>{title}</p>
            </div>
            <h3>{text}</h3>
        </div>
    )
}