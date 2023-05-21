import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../assessments/partials/assessment_component'
import '../components/account'
import '../components/onboarding'

describe('RankingPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the component of Onboarding Page',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickSettingsButton()
        cy.ClickOnboardingButton()
        cy.AssertOnboardingSettingsContainer()
        cy.AssertAssessmentContainer()
        cy.AssertCampaignContainer()
        cy.AssertWelcomeMessageContainer()
        

        })
    })