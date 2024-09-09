export interface Team {
  id: number;
  name: string;
  coaches: Coach[];
  players: Player[];
  schedule: ScheduleEvent[];
}
