describe("Demo test for the exceed stack size error", () => {
  it("should gracefully fail the test when api request times out", () => {
    cy.request("http://localhost:3000/").then(response => {
      expect(response.body).to.equal("Hello World!");
    })
  })
})