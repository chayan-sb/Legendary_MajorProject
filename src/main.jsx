import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Exercises from './Exercises/Exercises.jsx'
import Blogs from './Blogs/Blogs.jsx'
import About from './About/About.jsx'
import Profile from './Profile/Profile.jsx'
import Home from './LandingPage/index.jsx'
import {  ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './dashboard/index.jsx'
import Load_all_exercises from './Exercises/Load_all_exercises.jsx'
import All_exercises_plans from './Exercises/All_exercises_plans.jsx'
import Ai_exercises_plans from './Exercises/Ai_exercises_plans.jsx'
import FetchExercisesByCategory from './Exercises/fetch_exercises_by_category.jsx'
import ExerciseDetails from './Exercises/fetch_exercise_by_id.jsx'

import ExerciseSuggestions from './Exercises/fetch_exercises-by-Ai.jsx'
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
const router = createBrowserRouter(
  [
    {
        element:<App/>,
        children:[
          
          {
            path:'/dashboard',
            element:<Dashboard/>
          },
          {
            path: '/exercises',
            element: <Exercises/>  // Add route for Exercises
          },
          {
            path: '/blogs',
            element: <Blogs />  // Add route for Blogs
          },
          {
            path: '/about',
            element: <About />  // Add route for About
          },
          {
            path: '/profile',
            element: <Profile />  // Add route for Profile
          },
          {
            path:'/exercises/all',
            element:<Load_all_exercises/>
          },
          {
            path:'/exercises/curated-plans',
            element:<All_exercises_plans/>
          },
          {
            path: '/exercises/Ai-plans',
            element: <Ai_exercises_plans/>
          },
          {
            path:'/exercises/:category',
            element:<FetchExercisesByCategory/>
          },
          {
            path:'/exercises/_id/:_id',
            element:<ExerciseDetails/>
          },
          {
            path:'/exercise-suggestions',
            element:<ExerciseSuggestions/>
          }

        ]
    },
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/auth/sign-in',
      element:<SignInPage/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router= {router}/>
      </ClerkProvider>
    
    </React.StrictMode>
  </StrictMode>,
)
