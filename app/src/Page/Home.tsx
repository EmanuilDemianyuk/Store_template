import React from 'react';
import OurApp from '../components/OurApp';
import Reviews from '../components/Reviews';
import Statistics from '../components/Statistics';
import Welcome from '../components/Welcome';
import CompactMenu from '../components/CompactMenu';

export const Home = () => {
  return (
    <>
      <Welcome />
      <Statistics />
      <CompactMenu/>
      <Reviews />
      <OurApp />
    </>
  );
}
