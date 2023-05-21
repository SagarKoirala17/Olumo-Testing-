import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../assessments/partials/assessment_component'
import '../components/account'

describe('RankingPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check thcy.NavbarComponents()e components of settings page',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickSettingsButton()
        cy.AssertAccountPage()
        

        
        })
    })
