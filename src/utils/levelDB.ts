// This file returns a instance of LevelDB
import { ClassicLevel } from 'classic-level';

export const levelDB = new ClassicLevel<string, string>('../../db', {
  valueEncoding: 'utf8',
});
