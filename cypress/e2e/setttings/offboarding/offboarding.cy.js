import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../assessments/partials/assessment_component'
import '../components/account'
import '../components/onboarding'
import '../components/offboarding'

describe('RankingPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the component of Offboarding Page',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickSettingsButton()
        cy.ClickOffboardingButton()
        cy.AssertOffboardingSettingsContainer()
        cy.AssertOffAssessmentContainer()
        cy.AssertFarewellMessageContainer()
      })
    })
