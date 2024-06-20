import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import { newsData, newsMetadata } from "./interfaces";

export const getAllNewsIds = async () => {
  const dPath = join(process.cwd(), "news_posts");
  const fnames = await readdir(dPath);

  return fnames.map((fname) => fname.replace(/\.md$/, ""));
};

export const getNewsData = async (id: string) => {
  const fPath = join(process.cwd(), "news_posts", `${id}.md`);
  const fData = await readFile(fPath, "utf8");
  const fmData = matter(fData);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(fmData.content);
  const htmlContent = processedContent.toString();

  const metadata: newsMetadata = {
    id,
    title: fmData.data.title,
    description: fmData.data.description,
  };
  const data: newsData = { metadata, htmlContent };

  return data;
};
