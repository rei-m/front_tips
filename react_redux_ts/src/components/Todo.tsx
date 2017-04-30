import * as React from 'react';

export interface Props {
  id: number;
  text: string;
  completed: boolean;
  onClick: (id: number) => void;
}

class Todo extends React.Component<Props, void> {

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { id, text, completed, onClick } = this.props;
    return (
      <li
        key={id}
        onClick={() => onClick(id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
