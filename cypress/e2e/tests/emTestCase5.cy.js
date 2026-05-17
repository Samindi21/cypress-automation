import FilterPage from "../../pages/FilterPage"

const filterPage = new FilterPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC5 - Verify that records filtering according to the various filter options.', () => {

      it('Select a project.', function () {
        filterPage.selectProject(data.testData8.Project);
        
      })

      it('Select an employee', function () {
    
        filterPage.selectEmployee(data.testData8.Employee);
        cy.wait(500);

      })

     /* it('Select an employee who run a certain role within a project  ', function () {
    
        filterPage.selectProjectRole(data.testData8.ProjectRole);
      })*/

     it('Select the status of billable or not.', function () {
    
        filterPage.clickBillable();

      })

      it('Select SBU from the drop down', function () {
    
        filterPage.selectSbu(data.testData8.Sbu);
        cy.wait(500);
        
      })

      it('Select a client from the drop down', function () {
    
        filterPage.selectClient(data.testData8.Client);
        
      })

      //the filtered results were displayed after this button click.
      it('click "filter" button', function () {
    
        filterPage.clickFilterBtn();
        cy.wait(2000);
        
      })
     

})

