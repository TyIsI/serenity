import React from 'react';
import ReactDOM from 'react-dom';
import NewBookmark from './NewBookmark';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewBookmark />, div);
  ReactDOM.unmountComponentAtNode(div);
});