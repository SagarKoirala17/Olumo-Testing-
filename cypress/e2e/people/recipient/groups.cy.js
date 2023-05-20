import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'
import '../partials/groups'


describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the components of the group page',()=>{
        cy.ClickPeopleButton()
        //click the groups button
        cy.ClickGroupsButton()
        cy.AssertTheComponentofGroupPage()
        
        cy.AddNewGroup()
        cy.AssertGroupsPage()
        cy.CreateNewGroup()

        cy.SearchCreatedGroup()
        cy.RedirectGroupPage()
        cy.SearchCreatedGroup()
        cy.DeleteCreatedGroup()

      })
      it.skip('Create the subgroup',()=>{
        cy.ClickPeopleButton()
        //click the groups button
        cy.ClickGroupsButton()
        cy.AddNewGroup()
        cy.AssertGroupsPage()
        cy.CreateNewGroup()

        cy.SearchCreatedGroup()
        cy.HoverGroupLink()
        

      })
    })