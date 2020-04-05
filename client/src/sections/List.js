import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const HeaderItem = props => {
  const { title } = props;

  return (
    <Grid justify="space-between" container>
      <Grid item xs={12} md>
        <div className="">
          <div className="list-item__heading">
            <h2>{title}</h2>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const ListItem = props => {
  const { name, need, orgNumber, city, email, grade, type } = props;

  return (
        <Grid justify="space-between" container>
          <Grid item xs={12} md>
              <div className="list-item__heading">
                <h3 className="u-weight-500">{name}</h3>
              </div>
              <div className="list-item__content">
                <i className="u-weight-500">{need}</i>
              </div>
              <div className="list-item__meta">
                <span className="u-text-gray u-weight-500">{`${orgNumber}, ${city}`}</span>
              </div>
          </Grid>
          <Grid item xs={12} md className="u-text-right">
            <a className="btn btn--outline btn--red" href={`mailto: ${email}?subject=I found your company at pool19`}>Give support ❤️</a>
          </Grid>
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
        <div className="u-text-center u-mb-1">
          <h2>Here are all the companies that need support</h2>
          <p className="large">
            Higher ranking on the list means the more critical the need for support is.
          </p>
        </div>

        <ul className="unlist">
          <li className="list-item list-item--header">
            <HeaderItem title={"Company Name"} />
          </li>
          {listItems && listItems.length > 0
            ? listItems.map((item, index) => <li className="list-item" key={index}>
              <ListItem name={item.BusinessName} need={item.Need} orgNumber={item.OrgNr} city={item.Locality} grade={item.grave} email={item.Email} />
            </li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default List;
