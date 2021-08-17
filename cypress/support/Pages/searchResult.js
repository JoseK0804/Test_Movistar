class searchResultPage {
    
    constructor(){
        this.product = `#product-collection-image-1957`;
        this.noteResult = `.note-msg`;
    }

    // Metodo para elegir el producto
    selectProduct = () => {
        cy.get(this.product).click();
    }

    // Metodo para validar la busqueda sin resultado
    validarSearchNoResult = (note) => {
        cy.get(this.noteResult).should(`contain`, note);
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new searchResultPage();
