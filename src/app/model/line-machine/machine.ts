export interface Machine {
  title: string;
  icon: string;
  state: 'RUNNING' | 'ALARM' | 'WARNING';
}
