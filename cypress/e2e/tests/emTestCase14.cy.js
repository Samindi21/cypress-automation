import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})


describe('EMTC14 - Verify that the billing date period should within the allocation date period..', () => {
  
//To create a new allocation
  it('Click on the "New Allocation" button', function(){

    allocationManagementPage.clickNewAllocation();

  })

  it('Fill all fields by entering end date than start date ', function(){

    allocationManagementPage.getEmployee(data.testData1.Employee);
    allocationManagementPage.getSbu(data.testData1.Sbu);
    allocationManagementPage.getClient(data.testData1.Client);
    allocationManagementPage.getProject(data.testData1.Project);

    allocationManagementPage.getAllocationStartDate(data.testData1.AllocationStartDate);
    allocationManagementPage.getAllocationEndDate(data.testData1.AllocationEndDate);

  })

  it('Select "Billable" option', function(){

    allocationManagementPage.clickBillableRadioBtn();

  })

  
  it('Try to change the billing date excluding the allocation date period', function(){

    allocationManagementPage.clearBillingStartDate();
    allocationManagementPage.getBillingStartDate(data.testData17.BillingStartDate);

    allocationManagementPage.clearBillingEndDate();
    allocationManagementPage.getBillingEndDate(data.testData17.BillingEndDate);

  })

  it('Click on "Allocate" button and allocate the employee for the project', function () {

    allocationManagementPage.clickAllocateBtn();
    cy.wait(400);
    
  })




 


})