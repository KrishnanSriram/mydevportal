import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export const getJSONPost = async (slug) => {
  const data = await readFile(`content/posts/${slug}`, 'utf8');
  console.log('data', data);
  return JSON.parse(data);
};

export const getMDPost = async (slug) => {
  const source = await readFile(`content/posts/${slug}`, 'utf8');
  const {
    data: { title, date },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    title,
    date,
    body,
  };
};
