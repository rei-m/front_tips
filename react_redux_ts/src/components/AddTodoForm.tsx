import * as React from 'react';
import { Props as AddTodoProps } from '../containers/AddTodo';

export interface Props {
  onSubmit: (name: string) => void;
}

class AddTodoForm extends React.Component<Props & AddTodoProps, void> {

  private textInput: HTMLInputElement;

  constructor(props: Props & AddTodoProps) {
    super(props);
    this.setTextInput = this.setTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.setTextInput}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }

  private setTextInput(input: HTMLInputElement) {
    this.textInput = input;
  }

  private handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!this.textInput.value.trim()) {
      return;
    }
    this.props.onSubmit(this.textInput.value);
    this.textInput.value = '';
  }
}

export default AddTodoForm;
