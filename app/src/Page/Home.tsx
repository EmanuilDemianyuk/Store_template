import React from 'react';
import OurApp from '../components/OurApp';
import Reviews from '../components/Reviews';
import Statistics from '../components/Statistics';
import Welcome from '../components/Welcome';

export const Home = () => {
  return (
    <>
      <Welcome />
      <Statistics />
      <Reviews />
      <OurApp />
    </>
  );
}
