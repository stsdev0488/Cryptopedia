import database from '@react-native-firebase/database';

import {
  ICoinSnapshotData, ICourseData, ISnapshotElement, IVideo
} from './firebase.typings';

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

  snapshot.forEach((el: ISnapshotElement<ICourseData>) =>
    couses.push({ ...el.val(), key: el.key })
  );

  return couses;
};

export const getCourseVideos = async (course: string): Promise<IVideo[]> => {
  const snapshot = await database()
    .ref(`/courses/${course}/videos`)
    .once('value');

  const videos = <IVideo[]>[];

  snapshot.forEach((el: ISnapshotElement<IVideo>) => {
    videos.push(el.val());
  });

  return videos;
};
