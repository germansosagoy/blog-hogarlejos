import React from "react";
import { Post as PostType } from "@types/types";
import { ArrowUpRight } from "lucide-react";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
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
  )
}

export default Post;
