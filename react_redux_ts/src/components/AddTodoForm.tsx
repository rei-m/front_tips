import * as React from 'react';
import { Props as AddTodoProps } from '../containers/AddTodo'

export interface Props {
  onSubmit: (name: string) => void;
};

class AddTodoForm extends React.Component<Props & AddTodoProps, void> {

  constructor(props: Props & AddTodoProps) {
    super(props);
  }

  public render(): JSX.Element {

    let input: HTMLInputElement;

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onSubmit(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
