import * as React from 'react';
import { Props as FilterLinkProps } from '../containers/FilterLink';

export interface Props {
  active: boolean;
  children: JSX.Element;
  onClick: () => void;
}

class Link extends React.Component<Props & FilterLinkProps, void> {

  constructor(props: Props & FilterLinkProps) {
    super(props);
  }

  public render(): JSX.Element {

    const { active, children, onClick } = this.props;

    if (active) {
      return <span>{children}</span>;
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}
      >
        {children}
      </a>
    );
  }
}

export default Link;
