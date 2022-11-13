import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../init'

interface WordAttributes {
  id: number,
  source: string,
  pos: string,
  transcription: string,
  translations: Array<string>
}

class Word extends Model<WordAttributes> implements WordAttributes
{
  id!: number;
  source!: string;
  pos!: string;
  transcription!: string;
  translations!: Array<string>;
}

Word.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    pos: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    transcription: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    translations: {
      type: DataTypes.JSONB,
      allowNull: false,
      unique: false,
    }
  },
  {
    sequelize,
    tableName: 'words',
    modelName: 'Word',
    timestamps: false
  }
)

export default Word
