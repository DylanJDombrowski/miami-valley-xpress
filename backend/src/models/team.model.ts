import { Pool } from 'mysql2/promise';

export class Team {
  constructor(private pool: Pool) {}

  async getAllTeams() {
    const [rows] = await this.pool.query('SELECT * FROM teams');
    return rows;
  }

  async getTeamById(id: string) {
    const [rows, fields]: [any[], any] = await this.pool.query(
      'SELECT * FROM teams WHERE id = ?',
      [id]
    );
    return rows[0];
  }

  async updateTeam(id: string, teamData: any) {
    const { name, age_group, season } = teamData;
    await this.pool.query(
      'UPDATE teams SET name = ?, age_group = ?, season = ? WHERE id = ?',
      [name, age_group, season, id]
    );
  }

  // Add methods for players and coaches as well
}
