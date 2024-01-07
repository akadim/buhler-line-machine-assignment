import { MachineState } from './machine/machine.state';
import { ActionReducerMap } from '@ngrx/store';
import { lineMachinesSuccessReducer } from './machine/reducers/line-machine.reducer';

export interface AppState {
  machines: MachineState;
}

export const reducers: ActionReducerMap<AppState> = {
  machines: lineMachinesSuccessReducer,
};
