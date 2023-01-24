class ProductListPage {
	get = {
		firstItem: () => cy.xpath("//img[@data-image-index='1']"),
	};

	clickFirstItem() {
		this.get.firstItem().click();
	}
}

export const productList = new ProductListPage();
