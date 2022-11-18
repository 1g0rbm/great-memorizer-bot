import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript'
import WordList from './WordList';

interface AccountAttributes {
  chatId: number,
  wordlistId: number,
}

@Table({
  tableName: 'accounts',
  modelName: 'Account',
  timestamps: false
})
class Account extends Model<AccountAttributes> implements AccountAttributes
{
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    field: 'chat_id',
    unique: true,
  })
  chatId!: number;

  @ForeignKey(() => WordList)
  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    field: 'wordlist_id',
    unique: false,
  })
  wordlistId!: number;

  @HasMany(() => WordList)
  wordlists: WordList[]
}

export default Account
