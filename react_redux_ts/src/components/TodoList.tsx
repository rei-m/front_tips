import * as React from 'react';
import Todo, { Props as TodoProps } from './Todo';

export interface Props {
  todos: TodoProps[];
  onTodoClick: (id: number) => void;
}

class TodoList extends React.Component<Props, void> {

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {

    const { todos, onTodoClick } = this.props;

    const todoElements = todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={onTodoClick}
      />,
    );

    return (
      <ul>
        {todoElements}
      </ul>
    );
  }
}

export default TodoList;
