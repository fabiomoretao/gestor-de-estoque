// Formata a data de forma segura para o formato local
export default function formatDate(dateValue: string | number | Date | undefined) {
    if (!dateValue) return "—"
    try {
        const dateObj = dateValue instanceof Date ? dateValue : new Date(dateValue)
        // apenas a data no formato local. Para data+hora use toLocaleString()
        return dateObj.toLocaleDateString()
    } catch {
        return String(dateValue)
    }
}