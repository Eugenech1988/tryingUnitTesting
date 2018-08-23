import {
  LOADING_COMPLETED,
  LOADING_STARTED
} from 'constants/loaderConst';

const initialState = true;

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case LOADING_COMPLETED:
      return true;
    case LOADING_STARTED:
      return false;
    default:
      return state;
  }
}
