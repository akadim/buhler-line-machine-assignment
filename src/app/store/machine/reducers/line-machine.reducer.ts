import { MachineState } from '../machine.state';
import { createReducer, on } from '@ngrx/store';
import { loadMachinesSuccess } from '../actions/line-machine.action';

export const initialState: MachineState = {
  lineMachines: [],
};

export const lineMachinesSuccessReducer = createReducer(
  initialState,
  on(loadMachinesSuccess, (state, { lineMachines }) => ({
    ...state,
    lineMachines,
  }))
);
