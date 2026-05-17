import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC1 - Verify that user can create new allocation for a new employee with filling mandatory fields by valid values', () => {
    
//To create a new allocation
  it('Click on the "New Allocation" button', function(){

    allocationManagementPage.clickNewAllocation();

  })

  it('Enter the valid details of an employee', function() {

    allocationManagementPage.getEmployee(data.testData1.Employee);
    allocationManagementPage.getSbu(data.testData1.Sbu);
    allocationManagementPage.getClient(data.testData1.Client);
    allocationManagementPage.getProject(data.testData1.Project);
    allocationManagementPage.getAllocationStartDate(data.testData1.AllocationStartDate);
    allocationManagementPage.getAllocationEndDate(data.testData1.AllocationEndDate);
    allocationManagementPage.clickNonBillableRadioBtn();

  })

  it('Click on "Allocate" button and allocate the employee for the project', function () {

    allocationManagementPage.clickAllocateBtn();
    cy.wait(2000);
    
  })

})



