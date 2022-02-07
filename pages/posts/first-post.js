import Head from 'next/head';
import { readFile } from 'fs/promises';

export const getStaticProps = async () => {
  console.log('[first-post getStaticProps] invoked');
  const data = await readFile('content/posts/first-post.json', 'utf8');
  console.log('data', data);
  const post = JSON.parse(data);
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
