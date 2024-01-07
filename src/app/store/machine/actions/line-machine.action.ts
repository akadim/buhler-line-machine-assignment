import { createAction, props } from '@ngrx/store';
import { LineMachine } from '@buhler/model/line-machine/line-machine';

export const loadMachines = createAction('[Line Machine] Load Line Machines');

export const loadMachinesSuccess = createAction(
  '[Line Machine] Load Line Machines Success',
  props<{ lineMachines: LineMachine[] }>()
);
