import { connect } from 'react-redux'
import PreloginScreen from './PreloginScreen'
import { PreloginState, PreloginParams, GetPreloginStartAction, getPrelogin, preloginData } from '@sparkasse/commons';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@sparkasse/commons/build/prelogin/types';

const mapStateToProps = (state: RootState) => ({
  preloginData: preloginData(state.prelogin)
});

const mapDispatchToProps = (dispatch: ThunkDispatch<PreloginState, null, GetPreloginStartAction>) => ({
  onGetPreloginClick: (preloginParams: PreloginParams) => dispatch(getPrelogin(preloginParams))
});

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreloginScreen);
