import { readFile } from 'fs/promises';

export const getPost = async (slug) => {
  const data = await readFile(`content/posts/${slug}`, 'utf8');
  console.log('data', data);
  return JSON.parse(data);
};
