// src/components/Footer.tsx

import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react' ;

const Footer: React.FC = () => {
  return (
    <footer className='bg-primary-light py-4 mx-auto max-w-[1400px]'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex justify-start items-center mb-2 md:mb-0'>
        <p className='text-gray-500 text-sm'>Este blog fue creado por{" "}
            <a href="https://github.com/germansosagoy" target="_blank" rel="noreferrer" className="duration-300 hover:text-gray-400">Germán</a>
            {" "} 💭
        </p>
        </div>
        <div className='flex justify-center items-center mb-2 md:mb-0'>
          <div className='flex space-x-4 mr-10 opacity-70'>
            <a href="https://linkedin.com/in/german-sosa-goy-/" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-gray-800 duration-300 transition'>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/germansosagoy" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-gray-800 duration-300 transition'>
                <Github size={20} />
              </a>
              <a href="mailto:germanesosagoy@gmail.com" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-gray-800 duration-300 transition'>
                <Mail size={20} />
              </a>
          </div>
        </div>
        <div>
        <p className='text-gray-500 text-sm md:mr-6'>
         <a href="https://www.contentful.com/" target="_blank" rel="noreferrer" className="duration-300 hover:text-gray-400">&copy; Powered by Storyblok</a>
         </p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
