import React from 'react';
import useSWR from 'swr';
import Post from '@components/Blog/Post';
import { fetchPosts } from '@api/fetchPosts';


const PostList: React.FC = () => {
  const {data: posts, error} = useSWR<Post[]>('/api/posts', fetchPosts);

  console.log(posts, error)
  if (error) return <div className='text-center my-10'>Error al cargar los posts</div>
  if (!posts) return <div className='text-center my-10'>Cargando posts...</div>

  if(posts.length === 0) return <p className='text-center my-10 text-gray-800'>No hay posts disponibles</p>

  return (
    <section className='bg-primary-light max-w-[1200px] mx-auto px-2 my-12'>
    <h2 className='text-xl text-[#1A1A1A] font-bold mb-6'>Posts recientes del blog</h2>
    {posts.map((post, index) => (
      <Post key={post.id} post={post}/>
    ))}
    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {posts && posts.map((post, index) => (
        <div key={post.id} className={`bg-primary-light rounded-md ${index === 0 ? 'col-span-2 row-span-1 max-h-[480px]' : 'max-h-[240px]'}`}>
          <img src={post.coverImage} alt={post.title} className='w-full object-cover bg-center bg-cover rounded-md mb-4' />
          <div className='flex items-center text-sm font-semibold text-[#6941C6] w-full max-w-xs space-x-2 mb-4'>
            <p className='author'>{post.author.name}</p>
            <span>•</span>
            <p className="date">{new Date(post.datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          </div>
          <div className='flex items-center'>
            <a href={`/blog/${post.slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
              <h3 className='text-xl font-bold mb-1'>{post.title}</h3>
              <ArrowUpRight size={24} />
            </a>
          </div>
          <p className='text-gray-500 text-md max-w-xl text-justify'>{post.content}</p>
          <div className='mt-4 flex flex-wrap space-x-2'>
            {post.tags.map((tag: string, i: number) => (
              <span key={i} className='text-xs font-medium text-[#c01048] bg-[#c01048]/5 p-1.5 rounded-lg'>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div> */}
  </section>
        
    //     <div className='bg-primary-light rounded-lg'>
    //       <img src={posts[1].cover} alt={posts[1].title} className='w-full max-h-[240px] object-cover bg-center bg-cover rounded-md mb-4' />
    //       <div className='flex items-center text-sm font-semibold text-[#6941C6] w-full max-w-xs space-x-2 mb-2'>
    //         <p className='author'>{posts[1].author.name}</p>
    //         <span>•</span>
    //         <p className="date">{new Date(posts[1].datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
    //       </div>
    //       <div className='flex items-center'>
    //         <a href={`/blog/${posts[1].slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
    //           <h3 className='text-xl text-wrap font-bold mb-1'>{posts[1].title}</h3>
    //           <ArrowUpRight size={24} />
    //         </a>
    //       </div>
    //       <p className='text-gray-500 max-w-xs text-sm text-justify'>{posts[1].content}</p>
    //       <div className='mt-6 flex flex-wrap space-x-2'>
    //         {posts[1].tags.map((tag, i) => (
    //           <span key={i} className='text-xs font-medium text-[#c01048] bg-[#c01048]/5 p-1.5 rounded-lg'>
    //             #{tag}
    //           </span>
    //         ))}
    //       </div>
    //     </div>

    //     <div className='col-span-3 bg-primary-light rounded-lg flex my-12'>
    //       <img src={posts[2].cover} alt={posts[2].title} className='w-3/4 max-h-[280px] object-cover bg-center bg-cover rounded-md mb-4 mr-6' />
    //       <div className='flex flex-col justify-between'>
    //         <div>
    //           <div className='flex items-center text-sm font-semibold text-[#6941C6] w-full max-w-xs space-x-2 mb-2'>
    //             <p className='author'>{posts[2].author.name}</p>
    //             <span>•</span>
    //             <p className="date">{new Date(posts[2].datePublished).toLocaleDateString('es-ar', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
    //           </div>
    //           <div className='flex items-center'>
    //             <a href={`/blog/${posts[2].slug}`} className='hover:underline transition duration-300 flex items-center space-x-2'>
    //               <h3 className='text-xl text-wrap font-bold mb-1'>{posts[2].title}</h3>
    //               <ArrowUpRight size={24} />
    //             </a>
    //           </div>
    //           <p className='text-gray-500 text-base max-w-xl text-justify'>{posts[2].content}</p>
    //         <div className='mt-4 flex flex-wrap space-x-2'>
    //           {posts[2].tags.map((tag, i) => (
    //             <span key={i} className='text-xs font-medium text-[#c01048] bg-[#c01048]/5 p-1.5 rounded-lg'>
    //               #{tag}
    //             </span>
    //           ))}
    //         </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default PostList