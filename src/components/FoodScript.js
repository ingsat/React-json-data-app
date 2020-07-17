import React from 'react';
import '../App.css';
import {Food} from './Food';
import {PageHeader} from './PageHeader';
import {FoodData} from './data/FoodData';

export const FoodScript = () => {
  return (
    <>
      <PageHeader />
      <div className="foodContainer">
        {FoodData.map((data, key) => {
          return (
            <div key={key}>
              <Food
                key={key}
                category={data.category}
                price={data.price}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
