import { Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadMachines,
  loadMachinesSuccess,
} from '../actions/line-machine.action';
import { LineMachineService } from '@buhler/apis/line-machine.service';
import { map, Subject, switchMap, takeUntil } from 'rxjs';

@Injectable()
export class LineMachineEffects {
  constructor(
    private actions$: Actions,
    private lineMachineService: LineMachineService
  ) {}

  loadMachines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMachines),
      switchMap(() => {
        return this.lineMachineService
          .getAllMachines()
          .pipe(map((lineMachines) => loadMachinesSuccess({ lineMachines })));
      })
    )
  );
}
