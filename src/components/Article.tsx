import { Link } from "react-router-dom";

const Article = ({id, title, date, content}: {id: number, title: string, date: string, content: string}) => {
  return (
    <Link to={`/article/${id}`}>
      <article className="p-4 hover:cursor-pointer hover:bg-[#f5f5f5] dark:hover:bg-[#202020] transition-colors duration-300 rounded-lg ">
        <div className="text-xs text-[#808080] mb-1">{date}</div>
        <h3 className="text-lg text-[#000000] dark:text-[#ffffff] mb-1">{title}</h3>
        <p className="text-sm text-[#808080] dark:text-[#a0a0a0]">
          {content.slice(0, 300)}...
        </p>
      </article>
    </Link>
  )
}

export default Article