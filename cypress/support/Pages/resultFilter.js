class resultFilterPage {
    
    constructor(){
        this.buttomFilter = `li > .btn-group > .btn-filter`;
        this.GB256Option = `:nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label`;
        this.product = `.product-image`;
    }

    // Metodo para filtrar
    filter256GB = () => {
        cy.get(this.buttomFilter).click();
        cy.get(this.GB256Option).click();
    }
    
    // Metodo para validar que se esta mostrando al menos un producto
    existProduct = () => {
        cy.get(this.product).should('exist');
    }    
}
// Se exporta para que pueda ser usado en otros archivos js
export default new resultFilterPage();
