export interface LineMachine {
  id: number;
  title: string;
  icon: string;
  state: 'RUNNING' | 'ALARM' | 'WARNING';
}
