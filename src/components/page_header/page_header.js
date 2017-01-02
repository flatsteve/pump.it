import React from 'react';
import './page_header.css';

export default function PageHeader(props) {
  return (
    <div className="page-header">
      <h4 className="page-header__title text__header">
        {props.children}
      </h4>
    </div>
  );
};
