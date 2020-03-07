import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { Post } from '../../feed/models/post.model';

export const appFeatureKey = 'app';

export interface State {
  posts: Array<Post>;
}

export const initialState: State = {
  posts: []
};

const appReducer = createReducer(
  initialState,

  on(AppActions.loadApps, state => state),
  on(AppActions.loadAppsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(AppActions.loadAppsFailure, (state, action) => state)
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
