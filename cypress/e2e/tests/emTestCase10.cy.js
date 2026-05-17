import FilterPage from "../../pages/FilterPage"
import MoreAddAllocationPage from "../../pages/MoreAddAllocationPage"

const filterPage = new FilterPage ();
const moreAddAllocationPage = new MoreAddAllocationPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC10 - Verify system functionality when enter a same record which is having same data from the new allocation section.', () => {

     it('Navigate to an employee who have allocations already and the window create new allocation is popped up.', function () {
        
        //Navigate employee details
        filterPage.selectEmployee(data.testData12.Employee);
        filterPage.clickFilterBtn();

        //click more options,add allocation and the new window
        filterPage.clickMoreOptions();
        filterPage.clickAddAllocation();
        
      })

      //can visible the relavant SBU
      it('Select "SBU".', function () {

        moreAddAllocationPage.addSbu(data.testData13.Sbu);

      })

      //Can see clients under the selected SBU
      it('Select "Client".', function () {

        moreAddAllocationPage.clickClientDropDown();

      })

      //Can see projects under the relavant Client
      it('Select "Project".', function () {

        moreAddAllocationPage.clickProjectDropDown();

      })



})

