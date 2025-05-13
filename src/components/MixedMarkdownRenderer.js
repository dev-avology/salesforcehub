// components/MixedMarkdownRenderer.js
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

const MixedMarkdownRenderer = ({ content }) => {
  const fixedContent = content.replace(/http:\/\/localhost:3002/g, BASE_URL);

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
      {fixedContent}
    </ReactMarkdown>
  );
};

export default MixedMarkdownRenderer;
