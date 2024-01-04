import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '../machine';

@Injectable({
  providedIn: 'root',
})
export class LineMachineService {
  constructor(
    @Inject('BASE_API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getAllMachines() {
    return this.http.get<Machine[]>(this.apiUrl + '/machines');
  }
}
