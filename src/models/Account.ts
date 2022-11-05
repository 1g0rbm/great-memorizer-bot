import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../init'

interface AccountInterface {
  chatId: number,
}

interface AccountInstance extends Model<AccountInterface>, AccountInterface {}

const Account = sequelize.define<AccountInstance>(
  'account',
  {
    chatId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: false,
    },
  },
  {
    timestamps: false
  }
)

export { AccountInstance }

export default Account
