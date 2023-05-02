import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'

describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('CheckPeoplePageComponent',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickPeopleButton()
        cy.CheckTabMenuButtons()
        cy.CheckPeopleTableComponents()
        cy.ClickManuallyAddButton()
        cy.AssertRecipientDescriptionHeader()
        cy.AssertNoteContainer()
        cy.AssertPhotoContainer()
        cy.AssertTheHeaderofRecipientPage()
        cy.NegativeTestingForRecipeint()

      })
})