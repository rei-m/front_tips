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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public render(): JSX.Element {

    const { text, completed } = this.props;

    const style = {
      textDecoration: completed ? 'line-through' : 'none',
    };

    return (
      <li
        onClick={this.handleOnClick}
        style={style}
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
