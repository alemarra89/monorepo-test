import { connect } from 'react-redux'
import App from './App'
import { PreloginState, PreloginParams, GetPreloginStartAction, getPrelogin, preloginData } from '@sparkasse/commons';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = (state: PreloginState) => {
  return {
    preloginData: preloginData(state)
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<PreloginState, null, GetPreloginStartAction>) => {
  return {
    onGetPreloginClick: (preloginParams:PreloginParams) => dispatch(getPrelogin(preloginParams))
  }
}

export interface PreloginProps {
  preloginData: number,
  onGetPreloginClick: Function
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
