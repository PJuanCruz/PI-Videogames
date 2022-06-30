export default function validate(state, setState) {
    if (!state.value.length) {
        setState({ ...state, valid: false, message: 'el campo no puede estar vacío' });
    } else if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(state.value)) {
        setState({ ...state, valid: false, message: 'formato inválido: la fecha debe estar expresada como YYYY-MM-DD' });
    } else if (!dateIsValid(state.value)) {
        setState({ ...state, valid: false, message: 'fecha inexistente' });
    } else if (!dateIsValid2(state.value)) {
        setState({ ...state, valid: false, message: 'fecha inválida' });
    } else {
        setState({ ...state, valid: true, message: '' });
    };
}


export function dateIsValid(inputDate) {
    // inputDate -> 'YYYY-MM-DD'
    const [inputYear, inputMonth, inputDay] = inputDate.split('-');
    const date = new Date(inputDate + 'T00:00:00');

    return date.getFullYear() === parseInt(inputYear) && date.getMonth() + 1 === parseInt(inputMonth) && date.getDate() === parseInt(inputDay);
}

export function dateIsValid2(inputDate) {
    // inputDate -> 'YYYY-MM-DD'
    const date = new Date(inputDate + 'T00:00:00');
    return date <= new Date() && date > new Date('1900-01-01T00:00:00');
}