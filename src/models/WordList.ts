import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../init'

interface WordListAttributes {
  id: number,
  accountId: number,
  wordId: number,
}

class WordList extends Model<WordListAttributes> implements WordListAttributes
{
  id!: number;
  accountId!: number;
  wordId!: number;

  static associate(models: any) {
    WordList.belongsTo(models.Account, { foreignKey: 'wordlist_id'})
  }
}

WordList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    accountId: {
      field: 'account_id',
      type: DataTypes.INTEGER,
      references: {
        model: 'Account',
        key: 'chatId',
      }
    },
    wordId: {
      field: 'word_id',
      type: DataTypes.INTEGER,
      references: {
        model: 'Word',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    tableName: 'wordlists',
    modelName: 'WordList',
    timestamps: false
  }
)

export default WordList
