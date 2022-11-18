import {
  Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey, ForeignKey, BelongsTo, BelongsToMany
} from 'sequelize-typescript'
import Account from './Account'
import Word from './Word';
import Word2WordList from './Word2Wordlist';

@Table({
  tableName: 'wordlists',
  modelName: 'WordList',
  timestamps: false,
})
class WordList extends Model
{
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    field: 'id',
    unique: true,
  })
  id!: number;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    field: 'account_id',
  })
  accountId!: number;

  @BelongsTo(() => Account)
  account: Account

  @BelongsToMany(() => Word, () => Word2WordList)
  words: Word[]
}

export default WordList
