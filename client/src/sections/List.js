import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const ListItem = props => {
  const { name, need, orgNumber, city, email, grade, type } = props;

  return (
    <Grid justify="space-between" container>
      <Grid item xs={12} md>
        <div className="list-item">
          <div className="list-item__heading">
            <h3>{name}</h3>
          </div>
          <div className="list-item__content">
            <span>{need}</span>
          </div>
          <div className="list-item__meta">
            <span>{`${orgNumber}, ${city}`}</span>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md className="u-text-right"><a href={`mailto: ${email}`}>Give support ❤️</a></Grid>
    </Grid>
  );
};

const List = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios('/api/v1/spreadsheet').then(result => {
      setListItems(result.data);
    });
  }, []);

  return (
    <div className="section section--list" id="list">
      <div className="content-container">
        <div className="u-text-center">
          <h2>Here are all the companies that need support</h2>
          <p className="large">
            Higher ranking on the list means the more critical the need for support is.
          </p>
        </div>
        <ul className="unlist">
          {listItems && listItems.length > 0
            ? listItems.map((item, index) => <li key={index}>
              <ListItem name={item.BusinessName} need={item.Need} orgNumber={item.OrgNr} city={item.Locality} grade={item.grave} email={item.Email} />
            </li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default List;
