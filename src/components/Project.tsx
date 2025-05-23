import { Link } from '@heroui/react'
import { Icon } from "@iconify/react";

const Project = ({title, description, image, link, year}: {title: string, description: string, image: string, link: string, year: string}) => {
  return (
    <div className="flex flex-col md:flex-row">
    <div className="flex-grow pr-0 md:pr-8 mb-4 md:mb-0">
      <div className="text-xs text-zinc-400 mb-1">{year}</div>
      <h3 className="text-lg font-medium text-[#000000] dark:text-[#ffffff] mb-1">{title}</h3>
      <p className="text-sm text-[#808080] dark:text-[#a0a0a0] mb-3">
        {description}
      </p>
      <Link href={link} underline="none" className="text-sm inline-flex items-center text-[#000000] dark:text-[#ffffff]">
        Try it out <Icon icon="lucide:arrow-up-right" className="ml-1 w-3 h-3" />
      </Link>
    </div>
    <div className="flex-shrink-0 w-24 md:w-32">
      <div className="border border-[#e0e0e0] rounded-lg p-2 bg-[#ffffff]">
        <img 
          src={image} 
          alt="Project preview" 
          className="w-full"
        />
      </div>
    </div>
  </div>
  )
}

export default Project