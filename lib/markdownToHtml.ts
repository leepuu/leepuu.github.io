import { remark } from "remark";
import remarkToc from "remark-toc";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from 'remark-gfm'

const options = {
  theme: "one-dark-pro",
  keepBackground: true,
};

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeStringify, { allowDangerousHtml: true }).use(rehypePrettyCode, options).use(remarkToc).process(markdown);
  return result.toString();
}
