import React from 'react';
import classNames from 'classnames';
import './action_button.css';

const ActionButton = (props) => {
  let svgElement;
  let closeButtonClasses = classNames({
    [`${props.className}`]: props.className,
    'close-button': true
  });

  if (props.type === 'add') {
    svgElement = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 90 90">
      <path d="M50 5C25.183 5 5 25.183 5 50s20.183 45 45 45 45-20.183 45-45S74.817 5 50 5zm0 6c21.575 0 39 17.425 39 39S71.575 89 50 89 11 71.575 11 50s17.425-39 39-39zM23.552 48.11c-.728.903-.87 2.145-.364 3.19.506 1.043 1.57 1.702 2.73 1.69l21.056.024V74.05c-.062 1.113.497 2.17 1.453 2.742.956.573 2.15.57 3.103-.01.952-.58 1.504-1.64 1.434-2.753l-.002-21.04h21.036c1.112.07 2.172-.48 2.752-1.434.58-.952.584-2.147.01-3.103-.572-.956-1.628-1.516-2.74-1.453l-21.035.003-.022-21.058c.017-1.29-.793-2.445-2.01-2.87-1.217-.427-2.57-.027-3.36.993-.418.543-.636 1.213-.62 1.897v21.038H25.94c-.924-.018-1.804.39-2.387 1.106h.002z" /></svg>);
  } else {
    svgElement = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M50 5C25.183 5 5 25.183 5 50s20.183 45 45 45 45-20.183 45-45S74.817 5 50 5zm0 6c21.575 0 39 17.425 39 39S71.575 89 50 89 11 71.575 11 50s17.425-39 39-39zM32.656 29.97a3 3 0 0 0-1.78 5.124L45.75 50 30.875 64.875a3 3 0 1 0 4.25 4.22L50 54.218l14.875 14.874a3 3 0 1 0 4.25-4.22L54.25 50l14.875-14.906a3 3 0 0 0-2.47-5.125 3 3 0 0 0-1.78.904L50 45.75 35.125 30.875a3 3 0 0 0-2.47-.906z"></path></svg>);
  }

  return (
    <div onClick={props.closeAction} className={closeButtonClasses}>
      {svgElement}
    </div>
  );
};

export default ActionButton;
