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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public render(): JSX.Element {

    const { active, children } = this.props;

    if (active) {
      return <span>{children}</span>;
    }

    return (
      <a href="#" onClick={this.handleOnClick}>
        {children}
      </a>
    );
  }

  private handleOnClick(e: React.SyntheticEvent<HTMLAnchorElement>) {
    const { onClick } = this.props;
    e.preventDefault();
    onClick();
  }
}

export default Link;
