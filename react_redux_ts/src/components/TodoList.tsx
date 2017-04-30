import * as React from 'react';
import Todo from './Todo';

export interface Props {
  todos: {
    id: number,
    completed: boolean,
    text: string
  }[];
  onTodoClick: (id: number) => void;
};

class TodoList extends React.Component<Props, void> {

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {

    const { todos, onTodoClick } = this.props;

    return (
      <ul>
        {todos.map(todo =>
          <Todo
            {...todo}
            onClick={onTodoClick}
          />
        )}
      </ul>
    );
  }
}

export default TodoList
