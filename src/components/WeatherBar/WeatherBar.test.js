import React from 'react';
import ReactDOM from 'react-dom';
import WeatherBar from './WeatherBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
