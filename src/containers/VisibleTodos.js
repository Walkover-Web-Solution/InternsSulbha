import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'
import { deleteTodo } from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)