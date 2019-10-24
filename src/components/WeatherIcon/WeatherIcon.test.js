import React from 'react';
import ReactDOM from 'react-dom';
import WeatherIcon from './WeatherIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherIcon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
