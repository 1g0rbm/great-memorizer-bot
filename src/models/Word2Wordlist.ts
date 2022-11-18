import {
  Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey, ForeignKey, BelongsTo
} from 'sequelize-typescript'
import Word from './Word';
import WordList from './WordList';

@Table({
  tableName: 'words2lists',
  modelName: 'Word2WordList',
  timestamps: false,
})
class Word2WordList extends Model
{
  @ForeignKey(() => Word)
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'word_id',
    unique: true,
  })
  wordId!: number;

  @ForeignKey(() => WordList)
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'wordlist_id',
    unique: true,
  })
  wordlistId!: number;
}

export default Word2WordList
