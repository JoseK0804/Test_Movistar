// Importar las paginas
import indexPage from "../support/Pages/index";
import searchResultPage from "../support/Pages/searchResult";

describe(`CP004`, ()=> {
    // Se ejecuta antes de todas las pruebas
    before(()=> {
        cy.log(`Empiezan los test`);
    })

    // Se ejecuta despues de todas las pruebas
    after(()=> {
        cy.log(`Terminaron todos los test`);
    })

    // Se ejecuta antes de cada prueba
    beforeEach(()=> {
        cy.log(`Empezo el test`);
        cy.visit(`/`);
    })

    // Se ejecuta despues de todas las pruebas
    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    // Primer test
    it(`Validar pantalla sin resultados, luego de usar el buscador`, ()=> {
        // Metodo para buscar un valor
        indexPage.search(`Test_No_Result`);
        // Metodo para validar que la busqueda no arrojo ningun valor
        searchResultPage.validarSearchNoResult(`Su búsqueda no devolvió resultados`);
    });
})
