import React, {useEffect, useState} from 'react'

interface Post {
    id:string,
    title:string,
    slug: string,
    content:string,
    imageUrl: string,
}

const mockPosts: Post[] = [
    { 
        id: '1',
        title: 'Join us for the next frontend challenge',
        slug: 'join-us-for-the-next-frontend-challenge',
        content: 'We are excited to announce our next frontend challenge...',
        imageUrl: 'https://placehold.co/400',
      },
      {
        id: '2',
        title: 'Understanding React Hooks',
        slug: 'understanding-react-hooks',
        content: 'React Hooks are a new addition in React 16.8 that allow you to use state and other React features...',
        imageUrl: 'https://placehold.co/400',
      },
      {
        id: '3',
        title: 'Tips for improving your CSS skills',
        slug: 'tips-for-improving-your-css-skills',
        content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
        imageUrl: 'https://placehold.co/400',
      },
      {
        id: '4',
        title: 'Tips for improving your CSS skills',
        slug: 'tips-for-improving-your-css-skills',
        content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
        imageUrl: 'https://placehold.co/400',
      },
      {
        id: '5',
        title: 'Tips for improving your CSS skills',
        slug: 'tips-for-improving-your-css-skills',
        content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
        imageUrl: 'https://placehold.co/400',
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
    <section className='bg-primary-light max-w-[1216px] mx-auto px-4 my-10'>
        <h2 className='text-xl font-semibold mb-5'>Posts recientes del blog:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
         <div className='col-span-2 row-span-2 h-96 bg-primary-light shadow-md rounded-lg p-6'>
           <img src={mockPosts[0].imageUrl} alt={mockPosts[0].title} className='w-full h-48 object-cover rounded-t-lg mb-4' />
           <h3 className='text-lg font-medium mb-2'>{mockPosts[0].title}</h3>
           <p className='text-gray-700'>{mockPosts[0].content}</p>
           <a href={`/post/${mockPosts[0].slug}`} className='text-blue-400 hover:underline duration-300 mt-4 inline-block'>
            Leer más
           </a>
         </div>
           {mockPosts.slice(1).map((post) => (
               <div key={post.id} className='bg-primary-light shadow-md rounded-lg p-6'>
                <h3 className='text-lg font-medium mb-2'>{post.title}</h3>
                <p className='text-gray-700'>{post.content}</p>
                <a href={`/post/${post.slug}`} className='text-blue-400 hover:underline duration-300 mt-4 inline-block'>
                    Leer más
                </a>
               </div>
           ))}
        </div>
    </section>
  )
}

export default PostList