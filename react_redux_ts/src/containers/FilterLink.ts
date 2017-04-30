import { connect, Dispatch } from 'react-redux'
import { GlobalState } from '../reducers/index';
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

export interface Props {
  filter: string
}

const mapStateToProps = (state: GlobalState, props: Props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<GlobalState>, props: Props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
