// libraies
import React, { useState, useEffect } from 'react';

// components

// services and hooks
import { fetchService } from '../../services/fetchService';

// config

// styles and resources
import './Table.scss';

// consts and independent functions
const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
const town = 'Brastlewark';

const Table = () => {
  // const
  const [data, setData] = useState({ isLoading: true, data: [] });

  // functions

  // hooks
  useEffect(() => {
    const getData = () => {
      fetchService(url, town).then((resp) => {
        console.log(resp);
        setData({ isLoading: false, data: resp });
      });
    };

    getData();
  }, []);

  return (
    <div className="table-div-main">
      {data.isLoading ? (
        <div>Loading...</div>
      )
        : (
          <table>
            <thead>
              <tr>
                <th scope="col">
                  Image
                </th>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Age
                </th>
                <th scope="col">
                  Professions
                </th>
                <th scope="col">
                  Friends
                </th>
                <th scope="col">
                  Height
                </th>
                <th scope="col">
                  Weight
                </th>
                <th scope="col">
                  Hair color
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item, idx) => {
                console.log(111);
                return (
                  <tr
                    id={idx.toString()}
                    key={idx.toString()}
                    onClick={() => console.log(idx)}
                  >
                    <td className="text-center">
                      <a href={item.thumbnail} target="_blank" rel="noreferrer">
                        <img src={item.thumbnail} alt="Error" />
                      </a>
                    </td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.age}</td>
                    <td>
                      {item.professions.length > 0 ? (
                        <ul>
                          {item.professions.map((prof, i) => <li key={i.toString()}>{prof}</li>)}
                        </ul>
                      )
                        : (
                          <div className="text-center">It does not work</div>
                        )}
                    </td>
                    <td>
                      {item.friends.length > 0 ? (
                        <ul>
                          {item.friends.map((prof, i) => <li key={i.toString()}>{prof}</li>)}
                        </ul>
                      )
                        : (
                          <div className="text-center">It has not friends</div>
                        )}
                    </td>
                    <td className="text-center">{item.height}</td>
                    <td className="text-center">{item.weight}</td>
                    <td className="text-center">
                      {item.hair_color}
                      <div className="table-div-hair" style={{ background: item.hair_color }} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
    </div>
  );
};

// class prop types

export default Table;
