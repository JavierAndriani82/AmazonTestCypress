class CartPage {
	get = {
		inviteRequestButton: () => cy.get('#hdp-invite-button'),
	};

	clickInviteRequestBtn() {
		this.get.inviteRequestButton().click();
	}
}

export const cart = new CartPage();
