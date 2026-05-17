import FilterPage from "../../pages/FilterPage"
import MoreAddAllocationPage from "../../pages/MoreAddAllocationPage"
import AllocationManagementPage from "../../pages/AllocationManagementPage"

const filterPage = new FilterPage();
const moreAddAllocationPage = new MoreAddAllocationPage();
const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC9 - Verify that user can add a new allocation to already allocated employee from add allocation option.', () => {

      it('Navigate to an employee who have allocations already.', function () {

        filterPage.selectEmployee(data.testData11.Employee);
        filterPage.clickFilterBtn();
        cy.wait(400);

      })

      it('Click on more options.', () => {
        filterPage.clickMoreOptions();
        cy.wait(200);

      })

      it('Click on add allocation.', () => {
        filterPage.clickAddAllocation();

      })

      it('Fill the empty field with valid details of an employee.', function () {

        moreAddAllocationPage.addSbu(data.testData11.Sbu);
        moreAddAllocationPage.addClient(data.testData11.Client);
        moreAddAllocationPage.addProject(data.testData11.Project);
        moreAddAllocationPage.addAllocationStartDate(data.testData11.AllocationStartDate);
        moreAddAllocationPage.addAllocationEndDate(data.testData11.AllocationEndDate);

        allocationManagementPage.clickNonBillableRadioBtn();
   
      })

      it('Click "Allocate" Button.', () => {

        allocationManagementPage.clickAllocateBtn();
      
      })


})


