import '../../../global/navbar/navbar'
import '../../../global/sidebar/sidebar'
import { credentials } from '../../../../credentials'
import '../components/component'
import '../../rankings/components/components'
describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Check The components of metrices page',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickTheReportButton()
        cy.ClickMetricesButton()
        cy.AssertMetricesSortPage()
        cy.AssertMetricesViewContainer()

      })
    
    })
 