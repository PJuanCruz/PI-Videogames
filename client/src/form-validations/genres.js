export function validate(state, setState) {
    if (!Array.isArray(state.value)) {
        setState({ ...state, valid: false, message: 'Género inválido' });
    } else if (state.value.length === 0) {
        setState({ ...state, valid: false, message: 'Se debe seleccionar al menos un género' });
    } else {
        setState({ ...state, valid: true, message: '' });
    }
}