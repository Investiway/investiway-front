import React from 'react';
import Main from './index';

describe('<Main />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />);
  });
});
