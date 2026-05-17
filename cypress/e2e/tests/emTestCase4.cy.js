import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC4 - Verify system functionality when enter a same record which is having same data from the new allocation section.', () => {

  
      //To create a new allocation  
      it('Click on the "New Allocation" button', function () {
    
        allocationManagementPage.clickNewAllocation();
        cy.wait(2000);
        
      })

      it('Enter already allocated employee name to the employee name field and enter same values which is already added', function () {
    
        allocationManagementPage.getEmployee(data.testData7.Employee);
        allocationManagementPage.getSbu(data.testData7.Sbu);
        allocationManagementPage.getClient(data.testData7.Client);
        allocationManagementPage.getProject(data.testData7.Project);

        allocationManagementPage.getAllocationStartDate(data.testData7.AllocationStartDate);
        allocationManagementPage.getAllocationEndDate(data.testData7.AllocationEndDate);

        allocationManagementPage.clickNonBillableRadioBtn();

        allocationManagementPage.clickAllocateBtn();
      
        
      })

      //Try to create the new allocation but over allocation error message was popped up.
      it('Click on "Allocate" button and allocate the employee for the project', function () {

        allocationManagementPage.clickAllocateBtn();
        cy.wait(2000);
        
      })



})