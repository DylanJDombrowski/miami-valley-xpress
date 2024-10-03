import Team from '../models/team.model.js';
import { TeamRepository } from '../repositories/team.repository';

export class TeamService {
  private teamRepository: TeamRepository;

  constructor() {
    this.teamRepository = new TeamRepository();
  }

  async getAllTeams() {
    return this.teamRepository.findAll();
  }

  async getTeamById(id: string) {
    return this.teamRepository.findById(id);
  }

  async updateTeam(id: string, data: Partial<Team>) {
    return this.teamRepository.update(id, data);
  }
}
