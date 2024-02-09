/// <reference types="cypress" />

describe("app works", () => {
    it("passes", () => {
      cy.visit("http://localhost:5173");
    });
  });