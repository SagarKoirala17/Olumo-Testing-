import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../componets/engage_components'
describe('EngagePage',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('CheckTheEngagePageComponents',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickEngageButton()
        cy.CheckTheComponentsOfEngagePage()
        cy.BrowseTheChatHistory()
        cy.ClickTheRandomChat()
        })
    })

