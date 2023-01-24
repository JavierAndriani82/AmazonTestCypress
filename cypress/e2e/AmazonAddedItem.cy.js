const { searchBar } = require('../support/pages/amazonHeaderPage');
const { productList } = require('../support/pages/amazonItemListPage');
const { cart } = require('../support/pages/amazonCartPage');

///<reference types="cypress" />
require('cypress-xpath');

describe('Agregar items al cart que requieran Inicio de Sesion', () => {
	beforeEach('Precondiciones', () => {
		cy.visit('/');
		searchBar.searchForItem('PS5{enter}');
		productList.clickFirstItem();
	});

	it('Validar no poder hacer checkout de item VIP cuando no se ha realizado sesion', () => {
		cart.clickInviteRequestBtn();
		cy.url().should('contain', 'signin');
	});
});
