export interface Team {
  id: string;
  name: string;
  year: number;
  teamImageUrl?: string;
  players: Player[];
  schedule: ScheduleEvent[];
  coaches: Coach[];
}

export interface Player {
  name?: string;
  number?: number;
  position?: string;
  height?: string;
  bats?: string;
  throws?: string;
  town?: string;
  school?: string;
  gradYear?: number;
  gpa?: number;
  status?: string;
  twitter?: string;
  imageUrl: string;
}

export interface ScheduleEvent {
  date: string;
  sanction: string;
  eventName: string;
  location: string;
}

export interface Coach {
  name: string;
  position: string;
  email: string;
  phone: string;
  imageUrl: string;
}
