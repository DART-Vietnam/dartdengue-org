interface pub {
  title: string;
  href: string;
  category: {
    name: string;
    href: string;
    color: string;
  };
  description: string;
  date: string;
  datetime: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

interface milestone {
  title: string;
  timeStr: string;
}

interface timelineSect {
  title: string;
  color: string;
  milestones: milestone[];
}

interface bio {
  title: string;
  name: string;
  pi?: boolean;
  copi?: boolean;
  alt: string;
  imageUrl: string;
  bio: string;
}

interface newsMetadata {
  id: string;
  title: string;
  description: string;
}

interface newsData {
  metadata: newsMetadata;
  htmlContent: string;
}

interface newsDispProps {
  newsId: string;
  title: string;
  htmlContent: string;
}

export {
  type pub,
  type milestone,
  type timelineSect,
  type bio,
  type newsData,
  type newsMetadata,
  type newsDispProps,
};
