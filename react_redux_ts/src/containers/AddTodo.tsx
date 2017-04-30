import { connect, Dispatch } from 'react-redux'
import { GlobalState } from '../reducers/index';
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm';

export interface Props {
}

const mapStateToProps = (state: GlobalState, props: Props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<GlobalState>, props: Props) => {
  return {
    onSubmit: (name: string) => {
      dispatch(addTodo(name))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm)

export default AddTodo;
