import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '@buhler/model/line-machine/machine';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LineMachineService {
  constructor(
    @Inject('BASE_API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  public getAllMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl + '/machines');
  }
}
