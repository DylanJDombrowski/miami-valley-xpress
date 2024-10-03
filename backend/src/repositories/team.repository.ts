import { BaseRepository } from './base.repository';
import Team from '../models/team.model';

export class TeamRepository extends BaseRepository<Team> {
  constructor() {
    super(Team);
  }

  // Add any Team-specific methods here
}
