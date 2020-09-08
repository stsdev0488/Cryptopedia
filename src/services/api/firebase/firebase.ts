import database from '@react-native-firebase/database';

import { ICoinSnapshotData, ICourseData } from './firebase.typings';

export const getCoinSnapshotBySymbol = async (
  symbol: string
): Promise<ICoinSnapshotData | null> => {
  const snapshot = await database()
    .ref(`/coinsnapshot/${symbol.toLowerCase()}`)
    .once('value');

  return snapshot.val();
};

export const getCourses = async (): Promise<ICourseData[]> => {
  const snapshot = await database().ref('/courses').once('value');

  const couses = <ICourseData[]>[];

  snapshot.forEach((el: { val: () => ICourseData }) => couses.push(el.val()));

  return couses;
};
