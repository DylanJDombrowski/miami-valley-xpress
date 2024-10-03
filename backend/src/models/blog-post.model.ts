import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class BlogPost extends Model {
  public id!: number;
  public title!: string;
  public slug!: string;
  public shortDescription!: string;
  public content!: string;
  public image!: string;
  public date!: Date;
  public teamName!: string;
  public season!: string;
  public location!: string;
  public tournamentName!: string;
  public place!: string;
}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    shortDescription: {
      type: DataTypes.TEXT,
    },
    content: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    teamName: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    tournamentName: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'BlogPost',
  }
);

export default BlogPost;
