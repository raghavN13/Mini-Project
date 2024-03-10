import { I18nextProvider } from 'react-i18next';
import i18n from '../Internationalization/Internationalization';
import Header from '../Components/Dashboard/Header/Header';
describe('<Header />', () => {
  beforeEach(() => {
    // Set the screen width to a value greater than 800px
    cy.viewport(799, 800);
  });
  it('renders', () => {
    cy.mount(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    cy.get('.logo img').should('be.visible');
    cy.contains('.engine-info .text', 'Internet Booking Engine').should('be.visible');
    cy.get('.hamburger-icon').should('be.visible');
  });
  it('toggles dropdown on hamburger icon click', () => {
    cy.mount(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    cy.get('.navbar-right').should('not.have.class', 'dropdown-open');
    cy.get('.hamburger-icon').click();
    cy.get('.navbar-right').should('have.class', 'dropdown-open');
    cy.get('.language-image').should('be.visible');
    cy.get('.currency-image').should('be.visible');
    cy.get('.login-button').should('be.visible');
  });
});