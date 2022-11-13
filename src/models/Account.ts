import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../init'

interface AccountAttributes {
  chatId: number,
  wordlistId: number,
}

class Account extends Model<AccountAttributes> implements AccountAttributes
{
  chatId!: number;
  wordlistId!: number;

  static associate(models: any) {
    Account.hasMany(models.WordList, { foreignKey: 'account_id'})
  }
}

Account.init(
  {
    chatId: {
      field: 'chat_id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: false,
    },
    wordlistId: {
      field: 'wordlist_id',
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WordList',
        key: 'wordlist_id',
      }
    }
  },
  {
    sequelize,
    tableName: 'accounts',
    modelName: 'Account',
    timestamps: false
  }
)

export default Account
