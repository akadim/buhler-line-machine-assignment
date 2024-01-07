import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MachineState } from '../machine.state';

export const selectAppState = createFeatureSelector<MachineState>('machines');

export const selectLineMachines = createSelector(
  selectAppState,
  (state: MachineState) => state.lineMachines
);
