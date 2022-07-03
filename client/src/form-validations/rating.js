export function validate(state, setState) {
    if (!state.value.length) {
        setState({ ...state, valid: false, message: 'Se debe ingresar el rating' });
    } else if (state.value > 5) {
        setState({ ...state, valid: false, message: 'El rating no puede sey mayor a 5.00' });
    } else if (/^[0-9]$|^[0-9]\.$|^[0-9]\.[0-9]$/.test(state.value)) {
        setState({ ...state, valid: false, message: 'El rating debe estar expresado con dos decimales' });
    } else if (!/^[0-5]\.[0-9]{2}$/.test(state.value)) {
        setState({ ...state, valid: false, message: 'Rating inválido' });
    } else {
        setState({ ...state, valid: true, message: '' });
    }
}