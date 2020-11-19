// libraies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionType from '../../redux/actionTypes';

// components

// services and hooks

// config

// styles and resources
import './Searcher.scss';

// consts and independent functions

const Searcher = () => {
  // const
  const dispatch = useDispatch();
  const Searchs = useSelector((state) => state.Search);

  // functions
  const searchChanged = (event) => {
    dispatch({
      type: actionType.SEARCH_CHANGED,
      value:
        {
          data: { [event.target.name]: event.target.value },
        },
    });
  };

  // hooks

  return (
    <div className="searcher-div-main py-2">
      <div className="searcher-div-title">Searcher</div>
      <div className="searcher-div-imputs">
        <input
          className="form-control px-1"
          type="text"
          placeholder="Name"
          name="name"
          value={Searchs.name}
          onChange={(event) => searchChanged(event)}
        />
        <div className="searcher-div-maxmin">
          <input
            className="form-control px-1"
            type="number"
            placeholder="Maximum age"
            name="max_age"
            onChange={(event) => searchChanged(event)}
          />
          <input
            className="form-control px-1"
            type="number"
            placeholder="Minimun age"
            name="min_age"
            onChange={(event) => searchChanged(event)}
          />
        </div>
        <div className="searcher-div-maxmin">
          <input
            className="form-control px-1"
            type="number"
            placeholder="Maximum height"
            name="max_height"
            onChange={(event) => searchChanged(event)}
          />
          <input
            className="form-control px-1"
            type="number"
            placeholder="Minimun height"
            name="min_height"
            onChange={(event) => searchChanged(event)}
          />
        </div>
        <div className="searcher-div-maxmin">
          <input
            className="form-control px-1"
            type="number"
            placeholder="Maximun weight"
            name="max_weight"
            onChange={(event) => searchChanged(event)}
          />
          <input
            className="form-control px-1"
            type="number"
            placeholder="Minimun weight"
            name="min_weight"
            onChange={(event) => searchChanged(event)}
          />
        </div>
        <input
          className="form-control px-1"
          type="text"
          placeholder="Hair color"
          name="hair_color"
          onChange={(event) => searchChanged(event)}
        />
      </div>
    </div>
  );
};

// class prop types

export default Searcher;
