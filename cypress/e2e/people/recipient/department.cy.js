import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'
import '../partials/departments'
describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the components of the departments page',()=>{
        cy.ClickPeopleButton()
        cy.DepartmentButton()
        cy.ClickAddDepartmentButton()
        cy.AssertDepartmentPage()
        cy.AddNewDepartment()
        cy.reload()
        cy.SearchCreatedDepartment()
        cy.RedirectDepartmentPage()
        cy.SearchCreatedDepartment()
        cy.DeleteCreatedDepartment()

      })
    })
