import database from '@react-native-firebase/database';

interface ILink {
  displayText: string;
  url: string;
}

interface ICoinSnapshotData {
  about?: string;
  paperUrl?: string;
  creator?: string;
  website?: ILink;
  consensus_method?: string;
  hashing_algorithm?: string;
  explorer?: ILink;
  more_info?: ILink;
  networks?: {
    twitter?: string;
    facebook?: string;
    reddit?: string;
  };
}

export const getCoinSnapshotBySymbol = async (
  symbol: string
): Promise<ICoinSnapshotData | null> => {
  const snapshot = await database()
    .ref(`/coinsnapshot/${symbol.toLowerCase()}`)
    .once('value');

  return snapshot.val();
};
