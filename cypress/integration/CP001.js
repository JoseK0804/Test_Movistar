// Importar las paginas
import indexPage from "../support/Pages/index";
import searchResultPage from "../support/Pages/searchResult";
import productPage from "../support/Pages/product";

describe(`CP001`, ()=> {
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
    it(`Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52`, ()=> {
        // Metodo para buscar un valor
        indexPage.search(`A52`);
        // Metodo para seleccionar un producto
        searchResultPage.selectProduct();
        // Metodo para validar que el producto seleccionado sea el A52
        productPage.validarNameProduct(`A52`);
        // Metodo para validar que se pueda pagar hasta en 12 cuotas
        productPage.validarInfo(`12 cuotas`);
    });
})
