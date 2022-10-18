import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../init'

interface WordInterface {
  id: number,
  source: string,
  pos: string,
  transcription: string,
  translations: Array<string>
}

interface WordInstance extends Model<WordInterface>, WordInterface {}

const Word = sequelize.define<WordInstance>(
  'words',
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
    timestamps: false
  }
)

export { WordInstance }

export default Word
