/// <reference types="cypress" />

describe("app works", () => {
    it("passes", () => {
      cy.visit("http://localhost:5173");
    });
  });

  describe('Redirect Test', () => {
    it('anasayfadaki düğmeye tıklayınca sipariş formuna gidiyor', () => {
      cy.visit('http://localhost:5173');

      cy.get('.home-btn').click();
  
      cy.url().should('include', '/order');
    });
  });

describe('Form Validation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order');
  });

  it('zorunlu alanlar boşsa hata gösteriyor', () => {

    cy.contains('Lütfen pizzanın boyutunu seç.').should('be.visible');

    cy.contains('Lütfen hamurun kalınlığını seç.').should('be.visible');

    cy.contains('Lütfen geçerli bir isim gir (en az 3 harf).').should('be.visible');

    cy.get('.orderButton').should('be.disabled');

  });

  it('isim 2 karakterden kısaysa düğme devre dışı kalıyor, tüm zorunlu alanlar doğru şekilde doldurulunca düğme etkinleşiyor ve düğmeye basınca form gönderiliyor', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza').as('postRequest');

    cy.get('.form-cluster input[name="radio2"]').first().click();

    cy.get('#exampleSelect').select('İnce');

    cy.get('.name-field input').type('Ay');

    cy.get('.orderButton').should('be.disabled');

    cy.get('.name-field input').clear().type('Ayşe');

    cy.get('.orderButton').should('not.be.disabled');

    cy.get('.orderButton').click();

    cy.wait('@postRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
    });

    cy.url().should('include', '/success');
  });
});
