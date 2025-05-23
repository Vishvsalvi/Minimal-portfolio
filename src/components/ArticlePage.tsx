import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Icon } from "@iconify/react";

interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface ArticlePageProps {
  articles: Article[];
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articles }) => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || "1");
  
  const article = articles.find(a => a.id === articleId);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#1e1e1e] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#000000] dark:text-[#ffffff] mb-4">Article not found</h1>
          <Link 
            to="/" 
            className="text-[#808080] dark:text-[#a0a0a0] flex items-center justify-center"
          >
            <Icon icon="lucide:arrow-left" className="mr-2 w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#1e1e1e] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link 
            to="/#articles" 
            className="text-[#808080] dark:text-[#a0a0a0] flex items-center mb-6 hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors"
          >
            <Icon icon="lucide:arrow-left" className="mr-2 w-4 h-4" />
            Back to articles
          </Link>
          
          <div className="text-sm text-[#808080] mb-2">{article.date}</div>
          <h1 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
            {article.title}
          </h1>
        </header>
        
        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            components={{
              h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-[#000000] dark:text-[#ffffff] mt-6 mb-3" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-lg font-medium text-[#000000] dark:text-[#ffffff] mt-4 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="text-[#000000] dark:text-[#ffffff] mb-4 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="text-[#000000] dark:text-[#ffffff] mb-4 ml-6 list-disc" {...props} />,
              li: ({node, ...props}) => <li className="text-[#000000] dark:text-[#ffffff] mb-1" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-[#000000] dark:text-[#ffffff]" {...props} />,
              em: ({node, ...props}) => <em className="italic text-[#000000] dark:text-[#ffffff]" {...props} />,
              code: ({node, ...props}) => <code className="bg-[#f5f5f5] dark:bg-[#2a2a2a] px-1 py-0.5 rounded text-sm" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#e0e0e0] dark:border-[#3a3a3a] pl-4 my-4 italic text-[#808080] dark:text-[#a0a0a0]" {...props} />
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>
        
        {/* Footer Navigation */}
        <footer className="mt-12 pt-8 border-t border-[#e0e0e0] dark:border-[#3a3a3a]">
          <Link 
            to="/#articles" 
            className="text-[#808080] dark:text-[#a0a0a0] flex items-center hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors"
          >
            <Icon icon="lucide:arrow-left" className="mr-2 w-4 h-4" />
            Back to all articles
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ArticlePage; 