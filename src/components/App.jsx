import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from './Layout/Layout';
import { getCars } from '../redux/cars/carsOperations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>      
    </>
  );
}

