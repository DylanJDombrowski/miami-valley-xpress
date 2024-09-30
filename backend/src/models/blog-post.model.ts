import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class BlogPost extends Model {
  public id!: number;
  public title!: string;
  public slug!: string;
  public content!: string;
  public date!: Date;
  public location?: string;
  public tournamentName?: string;
  public place?: string;
  public image?: string;
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
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
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'BlogPost',
  }
);

export default BlogPost;
