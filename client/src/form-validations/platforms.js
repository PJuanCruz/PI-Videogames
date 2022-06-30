export default function validate(state, setState) {
    if (state.value.length === 0) {
        setState({ ...state, valid: false, message: 'el campo no pued estar vacío' })
    } else {
        setState({ ...state, valid: true, message: '' })
    }
}