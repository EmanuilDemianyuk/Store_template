import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const MealsMenu = () => {

  const data = [
      {
        label: "All",
        value: "all",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "Pizza",
        value: "pizza",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Sidedishes",
        value: "sidedishes",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Drinks",
        value: "drinks",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Desserts",
        value: "desserts",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
  ];

  return (
      <Tabs value="all" className="w-full">
        <div className='flex justify-between items-center '>
          <h2 className='font-header text-4xl'>Simple Meals for You</h2>
          <TabsHeader
            className="bg-transparent space-x-4"
            indicatorProps={{
              className: "bg-transparent border-2 border-BrandDarkGreen rounded-full shadow-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab 
              className="rounded-full text-lg text-BrandDarkGreen font-content px-4" 
              key={value} 
              value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
  );
}

export default MealsMenu;


