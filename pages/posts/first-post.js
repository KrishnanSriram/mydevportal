import Head from 'next/head';
import { getPost } from '../../lib/posts';

export const getStaticProps = async () => {
  console.log('[first-post getStaticProps] invoked');
  // const post = await
  const post = await getPost('first-post.json');
  return {
    props: { post },
  };
};

const FirstPostPage = ({ post }) => {
  console.log('[FirstPostPage] render', post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </main>
    </>
  );
};

export default FirstPostPage;
