//import AllocationManagementPage from "../../pages/AllocationManagementPage"
import FilterPage from "../../pages/FilterPage"

//const allocationManagementPage = new AllocationManagementPage ();
const filterPage = new FilterPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC6 - Verify that user cant search a record which is not added to the system.', () => {

      it('Enter a Employee name which is not in the system as a employee to the search field in Employee management section', function () {
    
        //here no employee called 'Pahan Fernando' in the system. So it displays an empty dropdown.
        filterPage.selectEmployee(data.testData9.Employee);
        cy.wait(2000);
        
      })


})