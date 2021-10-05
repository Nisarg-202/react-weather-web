import React, {useState} from 'react';
import {connect} from 'react-redux';

import {weatherFetch} from './actions';

function Form({weatherFetch}) {
  const [city, setCity] = useState('');
  function onCityChange(e) {
    setCity(e.target.value);
  }
  async function onHandleChange(e) {
    e.preventDefault();
    await weatherFetch(city);
  }
  return (
    <form onSubmit={onHandleChange}>
      <div className="input-group">
        <input
          className="form-control"
          placeholder="Search"
          required
          type="text"
          onChange={onCityChange}
          value={city}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default connect(null, {weatherFetch})(Form);
