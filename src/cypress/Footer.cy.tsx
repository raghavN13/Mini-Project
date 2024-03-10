import Footer from '../Components/Dashboard/Footer/Footer';

describe('<Footer />', () => {
  beforeEach(() => {
    cy.viewport(1000, 800);
  });
  it('renders', () => {
    cy.mount(<Footer />);
    cy.get('.footer-text').scrollIntoView();

    cy.get('.copyright-image').should('be.visible');
  });
});
