import React from 'react';
import AddGoal from './addGoal';
import { Goal } from '../../../utils/interfaces/goal';

describe('<AddGoal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    cy.mount(<AddGoal handelEdit={() => {}} goalEdit={{} as Goal} handleClose={() => {}} isOpen={true} />);
  });
});
