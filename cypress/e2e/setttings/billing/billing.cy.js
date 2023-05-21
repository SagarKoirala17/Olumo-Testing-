import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../assessments/partials/assessment_component'
import '../components/account'
import '../components/billing'

describe('BillingPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check the components of Billing Page',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickSettingsButton()
        cy.ClickBillingButton()

      })
    })
