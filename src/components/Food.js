import React from 'react';
import '../App.css';

export const Food = ({category, price, description}) => {
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
