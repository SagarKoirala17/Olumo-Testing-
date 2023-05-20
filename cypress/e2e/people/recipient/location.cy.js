import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'
import '../partials/groups'
import '../partials/location'
describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the components of the location page',()=>{
        cy.ClickPeopleButton()
        cy.ClickLocationButton()
        cy.ClickAddLocationButton()
        cy.AssertLocationPage()
        cy.AddNewLocation()
        cy.SearchCreatedLocation()
        cy.RedirectLocationPage()
        cy.SearchCreatedLocation()
        cy.DeleteCreatedLocation()

      })
    })
