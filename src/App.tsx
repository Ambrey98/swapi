import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Films from './pages/films/Films';
import Layout from './pages/Layout';
import People from './pages/people/People';
import Planets from './pages/planets/Planets';
import './App.scss';
import Main from 'pages/main/Main';
import Film from 'components/film/Film';
import Person from 'components/person/Person';
import Planet from 'components/planet/Planet';
import { FavProvider } from 'context/FavContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          path: '/',
          element: <Main />,
          children: [
            { path: 'films', element: <Films />, children: [{ path: ':id', element: <Film /> },] },
            { path: 'people', element: <People />, children: [{ path: ':id', element: <Person /> },] },
            { path: 'planets', element: <Planets />, children: [{ path: ':id', element: <Planet /> },] },
        ]},
        
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
