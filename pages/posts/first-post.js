import Head from 'next/head';

export const getStaticProps = async () => {
  console.log('[first-post getStaticProps] invoked');
  return {
    props: {
      post: {
        title: 'Firs Post Page title',
        body: 'A simple text loaded from getStaticProps',
      },
    },
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
