import Head from 'next/head';
import { getMDPost } from '../../lib/posts';

export const getStaticProps = async () => {
  console.log('[first-post getStaticProps] invoked');
  // const post = await
  const post = await getMDPost('first-post.md');
  return {
    props: { post },
  };
};

const FirstPostPage = ({ post }) => {
  console.log('[FirstPostPage] render');
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h2>{post.title}</h2>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default FirstPostPage;
