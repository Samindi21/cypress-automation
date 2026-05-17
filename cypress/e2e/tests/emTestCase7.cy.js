import FilterPage from "../../pages/FilterPage"

const filterPage = new FilterPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC7 - Verify that user can confirm the deallocation of a particular employee from a project.', () => {

      it('Select an employee to deallocate for a project',  function (){
    
        filterPage.selectEmployee(data.testData10.Employee);
        filterPage.clickFilterBtn();
        
      })

      it('Click the blue circle under actions',  function (){
    
        filterPage.clickDeallocateBtn();
        
      })

      //successfully confirmed the deallocation and a message was displayed.
      it('Click "Confirm" button', function () {
    
        filterPage.clickConfirmBtn();
        
      })



})