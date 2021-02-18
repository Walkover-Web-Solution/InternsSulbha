const todos = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            console.log(action.id)
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed } :
                    todo)
        case 'DELETE_TODO':
            console.log(state);
            return state = state.filter(function(goal) { return goal.id !== action.id}) 
    
        default:
            return state
    }
}
export default todos