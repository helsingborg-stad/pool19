import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios('/api/v1/spreadsheet').then(result => {
      setListItems(result.data);
    });
  }, []);

  return (
    <div className="section section--list" id="list">
      <div className="u-text-center">
        <h2>Here are all the companies that need support</h2>
        <p className="large">
          Higher ranking on the list means the more critical the need for support is.
        </p>
      </div>
      <div>
        {listItems && listItems.length > 0
          ? listItems.map((item, index) => <li key={index}>{JSON.stringify(item)}</li>)
          : null}
      </div>
    </div>
  );
};

export default List;
