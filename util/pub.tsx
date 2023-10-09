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

export default pub;
