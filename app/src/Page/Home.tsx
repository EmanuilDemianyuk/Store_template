import React from 'react';
import Reviews from '../components/Reviews';
import Statistics from '../components/Statistics';
import Welcome from '../components/Welcome';

export const Home = () => {
  return (
    <>
      <Welcome />
      <Statistics />
      <Reviews />
    </>
  );
}
