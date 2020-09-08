interface ILink {
  displayText: string;
  url: string;
}

export interface ICoinSnapshotData {
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

interface IVideo {
    description: string;
    imageurl: string;
    title: string;
    videourl: string;
}


export interface ICourseData {
  description: string;
  imageurl: string;
  title: string;
  videos: {
    [key: string]: IVideo;
  };
}
