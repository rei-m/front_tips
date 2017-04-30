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

    const { id, text, completed } = this.props;

    const decorationStyle = {
      textDecoration: completed ? 'line-through' : 'none',
    };

    return (
      <li
        key={id}
        onClick={this.handleOnClick}
        style={decorationStyle}
      >
        {text}
      </li>
    );
  }

  private handleOnClick(e: React.SyntheticEvent<HTMLLIElement>) {
    const { id, onClick } = this.props;
    onClick(id);
  }
}

export default Todo;
