import React from 'react';
import PostList from './PostList';
// import FullPosts from './FullPosts';


const Blog: React.FC = () => {
  return (
    <div>
      <PostList />
      <div className="border-[#000000]/10 border-b-2 mx-40 mt-2" />
      {/* <FullPosts /> */}
    </div>
  );
};

export default Blog;
