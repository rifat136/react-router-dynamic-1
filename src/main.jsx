import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './Component/Contact/Contact.jsx'
import Friends from './Component/Friends/Friends.jsx'
import FriendDetails from './Component/FriendDetails/FriendDetails.jsx'
import Posts from './Component/Posts/Posts.jsx'
import PostDetails from './Component/PostDetails/PostDetails.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
{
  path: '/',
  element: <Home></Home>,
  children: [

  {
    path:'/about',
    element: <About></About>
  },

  {
    path:'/contact',
    element: <Contact></Contact>,
  },


  {
    path:'/friends',
    element: <Friends></Friends>,
    loader: () => fetch('https://jsonplaceholder.typicode.com/users')
  },
  
  {
    path:'friend/:friendId',
    element: <FriendDetails></FriendDetails>,
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
  },

  {
   path: '/posts',
   element: <Posts></Posts>,
   loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
  },
  {
   path: '/post/:postId',
   element: <PostDetails></PostDetails>,
   loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  },
  {
    path: '*',
    element: <div><h1>404 Not found</h1></div>,
  }

  ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
