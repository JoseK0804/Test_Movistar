class indexPage {
    
    constructor(){
        this.buttomLupa = `.waves-effect > .icon-search`;
        this.inputSearch = `#myInput`;
        this.buttomFilter = `li > .btn-group > .btn-filter`;
        this.gamaAltaOption = `:nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label`;
        this.product = `.product-image`;
    }

    // Metodo para realizar una busqueda
    search = (element) => {
        cy.get(this.buttomLupa).click();
        cy.get(this.inputSearch).type(element);
        cy.get(this.inputSearch).type(`{enter}`);
    }

    // Metodo para filtrar por gama alta
    filterGamaAlta = () => {
        cy.get(this.buttomFilter).click();
        cy.get(this.gamaAltaOption).click();
    }

    // Metodo para seleccionar el tercer producto
    selectThirdProduct = () => {
        cy.get(this.product).eq(2).click();
    }
  
}

// Se exporta para que pueda ser usado en otros archivos js
export default new indexPage();
