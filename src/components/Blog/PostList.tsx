import React from 'react';
import { ArrowUpRight } from "lucide-react";

interface Post {
    id:string,
    title:string,
    slug: string,
    content:string,
    cover: string,
    datePublished: string,
    author: {
        name: string,
    },
    tags: string[],
}

const mockPosts: Post[] = [
    { 
        id: '1',
        title: 'Join us for the next frontend challenge',
        slug: 'join-us-for-the-next-frontend-challenge',
        content: 'We are excited to announce our next frontend challenge in June 2024 with our new team of frontends...',
        cover: 'https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        datePublished: '2024-06-04',
        author: {
            name: 'Germán Sosa Goy',
        },
        tags: ['Design', 'Research', 'Tips'],
    },
      {
        id: '2',
        title: 'Understanding React Hooks',
        slug: 'understanding-react-hooks',
        content: 'React Hooks are a new addition in React 16.8 that allow you to use state and other React features...',
        cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        datePublished: '2020-01-01',
        author: {
            name: 'Hector Lejos',
        },
        tags: ['Design', 'Research'],

      },
      {
        id: '3',
        title: 'Tips for improving your CSS skills',
        slug: 'tips-for-improving-your-css-skills',
        content: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
        cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        datePublished: '2020-01-01',
        author: {
            name: 'Hector Lejos',
        },
        tags: ['Design', 'Research']
      },
] 

const PostList: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([])

//   useEffect(() => {
//     const getPosts = async () => {
//         const allPosts = await fetch('post');
//         setPosts(allPosts as unknown as Post[]);
//     }
//     getPosts()
//   }, [])

  return (
    <section className='bg-primary-light max-w-[1216px] mx-auto px-3 my-16'>
      <h2 className='text-xl text-[#1A1A1A] font-semibold mb-6'>Posts recientes del blog:</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='col-span-2 row-span-1 max-h-[480px] bg-primary-light shadow-sm rounded-md p-3'>
          <img src={mockPosts[0].cover} alt={mockPosts[0].title} className='w-[90%] max-h-[260px] object-cover bg-center bg-cover rounded-md mb-4' />
          <div className='flex items-center text-sm font-semibold text-[#6941C6]/70 w-full max-w-xs space-x-2 mb-4'>
            <p className='author'>{mockPosts[0].author.name}</p>
            <span>{" - "}</span>
            <p className="date">{new Date(mockPosts[0].datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          </div>
          <div className='flex items-center'>
            <a href={`/post/${mockPosts[0].slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
              <h3 className='text-xl font-semibold mb-1'>{mockPosts[0].title}</h3>
              <ArrowUpRight size={24} />
            </a>
          </div>
          <p className='text-gray-500'>{mockPosts[0].content}</p>
          <div className='mt-4 flex flex-wrap space-x-2'>
            {mockPosts[0].tags.map((tag, i) => (
              <span key={i} className='text-xs font-normal text-[#C11574] bg-[#C11574]/5 p-2 rounded-xl'>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className='bg-primary-light shadow-sm rounded-lg p-4'>
          <img src={mockPosts[1].cover} alt={mockPosts[1].title} className='w-full max-h-[240px] object-cover bg-center bg-cover rounded-md mb-4' />
          <div className='flex items-center text-sm font-semibold text-[#6941C6]/70 w-full max-w-xs space-x-2 mb-2'>
            <p className='author'>{mockPosts[1].author.name}</p>
            <span>{" - "}</span>
            <p className="date">{new Date(mockPosts[1].datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          </div>
          <div className='flex items-center'>
            <a href={`/post/${mockPosts[1].slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
              <h3 className='text-lg text-wrap font-semibold mb-1'>{mockPosts[1].title}</h3>
              <ArrowUpRight size={24} />
            </a>
          </div>
          <p className='text-gray-500'>{mockPosts[1].content}</p>
          <div className='mt-6 flex flex-wrap space-x-2'>
            {mockPosts[1].tags.map((tag, i) => (
              <span key={i} className='text-xs font-normal text-[#C11574] bg-[#C11574]/5 p-2 rounded-xl'>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className='col-span-3 bg-primary-light rounded-lg p-4 flex'>
          <img src={mockPosts[2].cover} alt={mockPosts[2].title} className='w-3/4 max-h-[280px] object-cover bg-center bg-cover rounded-md mb-4 mr-6' />
          <div className='flex flex-col justify-between'>
            <div>
              <div className='flex items-center text-sm font-semibold text-[#6941C6]/70 w-full max-w-xs space-x-2 mb-2'>
                <p className=''>{mockPosts[2].author.name}</p>
                <span>{" - "}</span>
                <p className="">{new Date(mockPosts[2].datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              </div>
              <div className='flex items-center'>
                <a href={`/post/${mockPosts[2].slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
                  <h3 className='text-lg text-wrap font-semibold mb-1'>{mockPosts[2].title}</h3>
                  <ArrowUpRight size={24} />
                </a>
              </div>
              <p className='text-gray-500 max-w-xl text-justify'>{mockPosts[2].content}</p>
            <div className='mt-4 flex flex-wrap space-x-2'>
              {mockPosts[2].tags.map((tag, i) => (
                <span key={i} className='text-xs font-normal text-[#C11574] bg-[#C11574]/5 p-2 rounded-xl'>
                  #{tag}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostList