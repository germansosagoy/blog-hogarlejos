// import React, { useState } from 'react';

// interface Post {
//     id:string,
//     title:string,
//     slug: string,
//     content:string,
//     cover: string,
//     datePublished: string,
//     author: {
//         name: string,
//     },
//     tags: string[],
// }

// const mockPosts: Post[] = [
//     { 
//         id: '1',
//         title: 'Join us for the next frontend challenge',
//         slug: 'join-us-for-the-next-frontend-challenge',
//         content: 'We are excited to announce our next frontend challenge...',
//         cover: 'https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         datePublished: '2024-06-04',
//         author: {
//             name: 'Germán Sosa Goy',
//         },
//         tags: ['Design', 'Research', 'Tips'],
//     },
//       {
//         id: '2',
//         title: 'Understanding React Hooks',
//         slug: 'understanding-react-hooks',
//         content: 'React Hooks are a new addition in React 16.8 that allow you to use state and other React features...',
//         cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         datePublished: '2020-01-01',
//         author: {
//             name: 'Hector Lejos',
//         },
//         tags: ['Design', 'Research'],

//       },
//       {
//         id: '3',
//         title: 'Tips for improving your CSS skills',
//         slug: 'tips-for-improving-your-css-skills',
//         content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
//         cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         datePublished: '2020-01-01',
//         author: {
//             name: 'Hector Lejos',
//         },
//         tags: ['Design', 'Research']
//       },
//       {
//         id: '4',
//         title: 'Tips for improving your CSS skills',
//         slug: 'tips-for-improving-your-css-skills',
//         content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
//         cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         datePublished: '2020-01-01',
//         author: {
//             name: 'Hector Lejos',
//         },
//         tags: ['Design', 'Research', 'Tips'],
//       },
//       {
//         id: '5',
//         title: 'Tips for improving your CSS skills',
//         slug: 'tips-for-improving-your-css-skills',
//         content: 'CSS is a powerful tool for designing beautiful web pages. Here are some tips to improve your CSS skills...',
//         cover: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
//         datePublished: '2020-01-01',
//         author: {
//             name: 'Hector Lejos',
//         },
//         tags: ['Design', 'Research', 'Tips'],
//       },
// ];

// const POSTS_PER_PAGE = 6;

// const AllPosts: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(mockPosts.length / POSTS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const displayedPosts = mockPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

//   return (
//     <section className='bg-primary-light max-w-[1216px] mx-auto px-4 my-10'>
//       <h2 className='text-xl font-semibold mb-4'>Todos los posts publicados hasta la fecha:</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {displayedPosts.map((post) => (
//           <div key={post.id} className='bg-white rounded-lg p-6'>
//             <img src={post.cover} alt={post.title} className='w-full h-48 object-cover rounded-t-lg mb-4' />
//             <h3 className='text-lg font-medium mb-2'>{post.title}</h3>
//             <p className='text-gray-700'>{post.content}</p>
//             <a href={`/post/${post.slug}`} className='text-blue-500 hover:underline mt-4 inline-block'>
//               Leer más
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className="border-[#000000]/10 border-b-2 mx-auto mt-10" />
//       <div className='flex justify-center mt-10'>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={`mx-1 px-3 py-1 rounded ${
//               currentPage === index + 1 ? 'bg-[#C11574]/10 text-gray-700' : 'bg-gray-200 text-gray-700'
//             }`}
//           > 
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllPosts;
