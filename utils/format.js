export function formatDateToString(date) {
    // Obtener el día, mes y año del objeto Date
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();

    // Concatenar los valores en el formato "dd/mm/yyyy"
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

export function objectToArray(obj) {
    return Object.entries(obj).map(([name, value]) => (
    { name, value }
    ))}