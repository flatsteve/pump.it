import React from 'react';
import classNames from 'classnames';
import './close_button.css';

const CloseButton = (props) => {
  let closeButtonClasses = classNames({
    [`${props.className}`]: props.className,
    'close-button': true
  });

  return (
    <div onClick={props.closeAction} className={closeButtonClasses}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M50 5C25.183 5 5 25.183 5 50s20.183 45 45 45 45-20.183 45-45S74.817 5 50 5zm0 6c21.575 0 39 17.425 39 39S71.575 89 50 89 11 71.575 11 50s17.425-39 39-39zM32.656 29.97a3 3 0 0 0-1.78 5.124L45.75 50 30.875 64.875a3 3 0 1 0 4.25 4.22L50 54.218l14.875 14.874a3 3 0 1 0 4.25-4.22L54.25 50l14.875-14.906a3 3 0 0 0-2.47-5.125 3 3 0 0 0-1.78.904L50 45.75 35.125 30.875a3 3 0 0 0-2.47-.906z"></path></svg>
    </div>
  );
};

export default CloseButton;
