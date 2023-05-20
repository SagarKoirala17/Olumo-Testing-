import '../../../global/navbar/navbar'
import '../../../global/sidebar/sidebar'
import { credentials } from '../../../../credentials'
import '../components/components'

describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('CheckTheComponentsOfReportsPage',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickTheReportButton()
        cy.AssertMetricesAndRankingsButton()
        cy.AssertTheRankingPageViaDepartmentFilter()
        cy.AssertTheRankingPageViaOrganizationalFilter()
        cy.AssertTheDiagram()

        
      })
    })