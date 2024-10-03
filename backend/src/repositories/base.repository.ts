import {
  Model,
  ModelCtor,
  CreateOptions,
  UpdateOptions,
  DestroyOptions,
} from 'sequelize';

export class BaseRepository<M extends Model> {
  constructor(protected model: ModelCtor<M>) {}

  async findAll(): Promise<M[]> {
    return this.model.findAll();
  }

  async findById(id: string | number): Promise<M | null> {
    return this.model.findByPk(id);
  }

  async create(
    data: Partial<M>,
    options?: CreateOptions<M['_attributes']>
  ): Promise<M> {
    return this.model.create(data as M['_attributes'], options);
  }

  async update(
    id: string | number,
    data: Partial<M>,
    options?: UpdateOptions<M['_attributes']>
  ): Promise<[number, M[]]> {
    const [affectedCount, affectedRows] = await this.model.update(data, {
      where: { id } as any,
      returning: true,
      ...options,
    });
    return [affectedCount, affectedRows as M[]];
  }

  async delete(
    id: string | number,
    options?: DestroyOptions<M['_attributes']>
  ): Promise<number> {
    return this.model.destroy({
      where: { id } as any,
      ...options,
    });
  }
}
