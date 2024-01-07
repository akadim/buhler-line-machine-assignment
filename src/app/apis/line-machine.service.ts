import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineMachine } from '@buhler/model/line-machine/line-machine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LineMachineService {
  constructor(
    @Inject('BASE_API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  public getAllMachines(): Observable<LineMachine[]> {
    return this.http.get<LineMachine[]>(this.apiUrl + '/machines');
  }
}
