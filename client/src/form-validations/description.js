export function validate(state, setState) {
    if (typeof state.value !== 'string') {
        setState({ ...state, valid: false, message: 'Descripción inválida' });
    } else if (state.value.length > 120) {
        setState({ ...state, valid: false, message: 'El campo no puede tener más de 120 caracteres' });
    } else if (!state.value.length) {
        setState({ ...state, valid: false, message: 'El campo no puede estar vacío' });
    } else if (state.value.length < 10) {
        setState({ ...state, valid: false, message: 'El campo debe tener por lo menos 10 caracteres' });
    } else {
        setState({ ...state, valid: true, message: null });
    }
}