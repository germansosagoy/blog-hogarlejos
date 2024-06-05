import React from 'react';
import PostList from './PostList';
import AllPosts from './Allposts';
// import Footer from '@components/Footer/Footer';

const Blog: React.FC = () => {
  return (
    <div>
      <PostList />
      <div className="border-[#000000]/10 border-b-2 mx-40 mt-2" />
      <AllPosts />
      {/* <Footer/> */}
    </div>
  );
};

export default Blog;
