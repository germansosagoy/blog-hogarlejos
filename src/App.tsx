// import { useState } from 'react'
import Header from '@components/Header/Header'
import Blog from '@components/Blog/Blog'
import Footer from '@components/Footer/Footer'
// import { apiPlugin, storyblokInit} from '@storyblok/react'

function App() {

  // storyblokInit({
  //   accessToken: '',
  //   components: COMPONENTS,
  //   use: [apiPlugin],
  //   apiOptions: {
  //     region: 'eu',
  //   },
  // })

  return (
    <>
      <Header/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
