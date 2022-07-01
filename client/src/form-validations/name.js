export function validate(state, setState) {
    if (state.value.length > 60) {
        setState({ ...state, valid: false, message: 'El nombre no puede tener más de 60 caracteres' });
    } else if (!state.value.length) {
        setState({ ...state, valid: false, message: 'El campo no puede estar vacío' });
    } else if (state.value.length < 3) {
        setState({ ...state, valid: false, message: 'El nombre debe tener por lo menos 3 caracteres' });
    } else {
        setState({ ...state, valid: true, message: null });
    }
}