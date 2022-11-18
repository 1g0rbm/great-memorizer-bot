import {
  Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey, ForeignKey, BelongsTo
} from 'sequelize-typescript'

interface WordAttributes {
  id: number,
  source: string,
  pos: string,
  transcription: string,
  translations: Array<string>
}

@Table({
  tableName: 'words',
  modelName: 'Word',
  timestamps: false
})
class Word extends Model<WordAttributes> implements WordAttributes
{
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'id',
    unique: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  source!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  pos!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  transcription!: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    unique: false,
  })
  translations!: Array<string>;
}

export default Word
