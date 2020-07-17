import React from 'react';
import '../App.css';
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

const PageHeader = () => {
  return (
    <header className="header">
      <h2>Your delicious chicken</h2>
    </header>
  );
};

const Food = ({category, price, description}) => {
  if (!category) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{category}</h5>
          </td>
          <td>
            <h5>{price}</h5>
          </td>
          <td>
            <p>{description}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
