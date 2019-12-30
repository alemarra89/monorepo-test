import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import App from './App'
import { UserState } from '@sparkasse/commons/build/prelogin/reducer';
import { getPreloginSelector } from '@sparkasse/commons/build/prelogin';
import { getPreloginStart } from '@sparkasse/commons/build/prelogin/actions';

const mapStateToProps = (state: UserState) => {
  return {
    logged: getPreloginSelector(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onGetPreloginClick: () => {
      dispatch(getPreloginStart());
    }
  }
}

// export default connect<{}, {}, PassedProps>(mapStateToProps, mapDispatchToProps)    (ChildComponent);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)