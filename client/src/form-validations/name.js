export function validate(state, setState) {
    if (typeof state.value !== 'string') {
        setState({ ...state, valid: false, message: 'Título inválido' });
    } else if (state.value.length > 60) {
        setState({ ...state, valid: false, message: 'El título no puede tener más de 60 caracteres' });
    } else if (!state.value.length) {
        setState({ ...state, valid: false, message: 'El campo no puede estar vacío' });
    } else if (state.value.length < 3) {
        setState({ ...state, valid: false, message: 'El título debe tener por lo menos 3 caracteres' });
    } else {
        setState({ ...state, valid: true, message: null });
    }
}