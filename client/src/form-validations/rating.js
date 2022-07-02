export function validate(state, setState) {
    // console.log(typeof state.value)
    if (!/^[0-9]$|^[0-9]\.$|^[0-9]\.[0-9]{1,2}$|^[0-9]\.[0-9]{2}$/.test(state.value)) {
        setState({ ...state, valid: false, message: 'formato inválido: el rating debe estar expresado como 4.99' });
    } else if (parseFloat(state.value) > 5) {
        setState({ ...state, valid: false, message: 'el rating no pude ser mayor a 5' });
    } else if (!/^[0-5]$|^[0-5]\.$|^[0-5]\.[0-9]{1,2}$|^[0-5]\.[0-9]{2}$/.test(state.value)) {
        setState({ ...state, valid: false, message: 'rating inválido' });
    } else {
        setState({ ...state, valid: true, message: '' });
    }
}