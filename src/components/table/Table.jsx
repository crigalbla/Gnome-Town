// libraies
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionType from '../../redux/actionTypes';

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
  const dispatch = useDispatch();
  const [data, setData] = useState({ isLoading: true, data: [] });
  const [amoutOfGnomes, setAmountOfGenomes] = useState(50);
  const Searchs = useSelector((state) => state.Search);

  // functions
  const searchFriend = (friend) => {
    dispatch({
      type: actionType.SEARCH_CHANGED,
      value:
        {
          data: { name: friend },
        },
    });
  };

  const filterTable = (row) => {
    let result = true;
    if (Searchs) {
      if (Searchs.name) {
        result = row.name.toLocaleLowerCase().includes(Searchs.name.toLocaleLowerCase());
      }

      if (result && Searchs.max_age) {
        result = row.age <= Searchs.max_age;
      }
      if (result && Searchs.min_age) {
        result = row.age >= Searchs.min_age;
      }

      if (result && Searchs.max_height) {
        result = row.height <= Searchs.max_height;
      }
      if (result && Searchs.min_height) {
        result = row.height >= Searchs.min_height;
      }

      if (result && Searchs.max_weight) {
        result = row.weight <= Searchs.max_weight;
      }
      if (result && Searchs.min_weight) {
        result = row.weight >= Searchs.min_weight;
      }

      if (result && Searchs.hair_color) {
        result = row.hair_color.toLocaleLowerCase().includes(Searchs.hair_color.toLocaleLowerCase());
      }
    }
    return result;
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight;

    if (bottom) {
      setAmountOfGenomes(amoutOfGnomes + 50);
    }
  };

  // hooks
  useEffect(() => {
    const getData = () => {
      fetchService(url, town).then((resp) => {
        setData({ isLoading: false, data: resp });
      });
    };

    getData();
  }, []);

  return (
    <div className="table-div-main" onScroll={handleScroll}>
      {data.isLoading ? (<div className="text-center">Loading...</div>)
        : (
          <table className="table-striped w-100">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Professions</th>
                <th>Friends</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Hair color</th>
              </tr>
            </thead>
            <tbody>
              {data.data
                .filter((x) => filterTable(x))
                .filter((x, i) => i < amoutOfGnomes)
                .map((item, idx) => (
                  <tr
                    key={idx.toString()}
                  >
                    <td className="text-center">
                      <a href={item.thumbnail} target="_blank" rel="noopener noreferrer">
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
                          {item.friends.map(
                            (friend, i) => (
                              <li
                                className="table-li-mouse"
                                key={i.toString()}
                                role="presentation"
                                onClick={() => searchFriend(friend)}
                              >
                                {friend}
                              </li>
                            ),
                          )}
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
                ))}
            </tbody>
          </table>
        )}
    </div>
  );
};

// class prop types

export default Table;
