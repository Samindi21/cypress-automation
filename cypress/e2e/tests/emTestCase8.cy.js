import FilterPage from "../../pages/FilterPage"

const filterPage = new FilterPage();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC8 - Verify that user can revoke the deallocation confirmation of an employee', () => {
    
      it('Navigate to an employee who have a deallocation confirmation', function () {
        
        filterPage.selectEmployee(data.testData10.Employee);
        filterPage.clickFilterBtn();
        
      })

      it('Click orange circle to revoke', () => {
    
        filterPage.clickRevokeOrangeCircle();
              
      })

      it('Click confirm to confirm the reallocation', () => {
    
        filterPage.clickRevokeConfirmBtn();
              
      })

})