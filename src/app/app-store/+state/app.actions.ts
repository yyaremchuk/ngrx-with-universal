import { createAction, props } from '@ngrx/store';
import { Post } from '../../feed/models/post.model';

export const loadApps = createAction('[App] Load Apps');

export const loadAppsSuccess = createAction(
  '[App] Load Apps Success',
  props<{ posts: Array<Post> }>()
);

export const loadAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);
