import React from "react";
import { Link, Form, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Project from "./Project";
import Article from "./Article";
import { ThemeSwitcher } from "./theme-switcher";

interface HomePageProps {
  projects: any[];
  articles: any[];
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  showAllProjects: boolean;
  setShowAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  projects,
  articles,
  email,
  setEmail,
  showAllProjects,
  setShowAllProjects,
  handleSubmit
}) => {
  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#1e1e1e] flex items-center justify-center py-8 px-4">
      <div className="bg-[#ffffff] dark:bg-[#1e1e1e] max-w-4xl w-full rounded-xl overflow-hidden">
        {/* Navigation */}
        <header className="w-full p-8 flex justify-center items-center border-[#e0e0e0]">
          
          <nav className="w-full flex justify-evenly items-center space-x-8">
          <div>
          <span className=" text-[#121212] dark:text-[#ffffff]">Elon Musk</span>
          </div>
            <div className="flex flex-col items-center">
              <Link href="#projects" className="text-[#808080]" underline="none">Projects</Link>
            </div>
            <div>
            <Link href="#articles" className="text-[#808080]" underline="none">Articles</Link>
            </div>
          <div className="flex items-center space-x-4">
             
             <ThemeSwitcher />
          </div>
          </nav>
          
        </header>
        
        {/* Main content */}
        <div className="p-8">
          {/* Profile section */}
          <section id="profile" className="px-24 flex flex-col md:items-start mb-20">
            <div className="flex-shrink-0 mb-4 md:mb-6 md:mr-6">
              <div className="w-16 h-16 rounded-full bg-[#e7e7e7] overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cZexbbzCkxrHMMM0pz0IOu6vHezO3_n8sQ&s" 
                  alt="Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-[#000000] dark:text-[#ffffff] mb-2">I build cars and rockets</h1>
              <p className="text-[#808080] dark:text-[#a0a0a0] mb-3">
                I am an engineer and a visionary entrepreneur, founder of Tesla and SpaceX.
                One of the greatest entrepreneurs of all time. I am also the CEO of X.
              </p>
              <Link href="#magic" underline="none" className="text-sm inline-flex items-center text-[#000000] dark:text-[#ffffff]">
                Take me to the magic land <Icon icon="lucide:arrow-right" className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </section>
          
          {/* Projects section */}
          <section id="projects" className="mb-12 px-24 ">
            <h2 className="text-lg text-[#000000] dark:text-[#ffffff] mb-6">Projects</h2>
            <div className="space-y-8">
              {/* Project 1 */}
              {(showAllProjects ? projects : projects.slice(0, 3)).map((project) => (
                <Project key={project.id} {...project} />
              ))}
            </div>
            <div className="mt-6">
              <Link 
                href="#" 
                underline="none" 
                className="text-sm inline-flex items-center text-[#000000] dark:text-[#ffffff]"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAllProjects(!showAllProjects);
                }}
              >
                {showAllProjects ? 'Show fewer projects' : 'View all projects'} <Icon icon="lucide:arrow-right" className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </section>
          
          {/* Articles section */}
            <h2 id="articles" className="px-24 text-xl font-medium text-[#000000] dark:text-[#ffffff] mb-6">Articles</h2>
          <section className="mb-12 px-20">
            <div className="space-y-8">
              {/* Article 1 */}
              {articles.map((article) => (
                <Article key={article.id} {...article} />
              ))}
            </div>
          </section>
          
          {/* Newsletter section */}
          <section className="mx-24 mb-12 bg-[#f5f5f5] dark:bg-[#2a2a2a] p-6 rounded-lg">
            <h2 className="text-xl text-[#000000] dark:text-[#ffffff] mb-2">Join my newsletter</h2>
            <p className="text-sm text-[#808080] dark:text-[#a0a0a0] mb-4">
              I regularly share my professional or personal updates on substack!
            </p>
            <Form className="flex flex-col md:flex-row items-center gap-2" onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-md border border-[#e0e0e0] dark:border-[#3a3a3a] text-sm dark:bg-[#252525] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff]"
              />
              <Button 
                type="submit" 
                className="bg-[#ffffff] text-[#000000]"
              >
                Subscribe
              </Button>
            </Form>
          </section>
          
          {/* Contact section */}
          <section>
            <div className="w-full  flex flex-col md:flex-row md:justify-center md:items-center">
              <div>
                <div className="flex items-center space-x-2">
                  <Link href="https://x.com/salvivishv" underline="none" className="text-sm text-[#000000] dark:text-[#ffffff] flex items-center">
                    Twitter 
                  </Link>
                  <span className="text-[#808080] dark:text-[#a0a0a0]">•</span>
                  <Link href="https://github.com/Vishvsalvi/" underline="none" className="text-sm text-[#000000] dark:text-[#ffffff] flex items-center">
                    Github 
                  </Link>
                  <span className="text-[#808080] dark:text-[#a0a0a0]">•</span>
                  <Link href="#linkedin" underline="none" className="text-sm text-[#000000] dark:text-[#ffffff] flex items-center">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 