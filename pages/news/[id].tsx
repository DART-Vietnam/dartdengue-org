import NewsDisplay from "@/components/news-disp";
import { getAllNewsIds, getNewsData } from "@/util/getNews";
import { newsData } from "@/util/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = (async () => {
  const paths = (await getAllNewsIds()).map((id) => {
    return {
      params: {
        id,
      },
    };
  });

  // console.log(`========================\npaths = ${JSON.stringify(paths)}`);

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const postId =
    typeof params?.id! === "string" ? params?.id! : params?.id!.at(-1)!;
  // console.log(`========================\npostId = ${postId}`);

  const postData = await getNewsData(postId);

  return {
    props: {
      postData,
    },
  };
}) satisfies GetStaticProps;

export default function News(props: { postData: newsData }) {
  return (
    <NewsDisplay
      newsId={props.postData.metadata.id}
      title={props.postData.metadata.title}
      htmlContent={props.postData.htmlContent}
    />
  );
}
