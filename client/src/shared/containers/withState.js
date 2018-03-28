import { withState as recomposeWithState } from 'recompose';

export function withState (initialState) {
	return recomposeWithState('state', 'setState', initialState);
}