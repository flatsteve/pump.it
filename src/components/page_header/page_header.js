import React from 'react';
import './page_header.css';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <h4 className="page-header__title text__header">
        {props.children}
      </h4>
    </div>
  );
};

export default PageHeader;
