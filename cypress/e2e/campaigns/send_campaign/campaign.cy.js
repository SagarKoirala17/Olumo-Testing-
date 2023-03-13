import '../partials/campaign_homepage_components'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import '../../campaigns/partials/campaign_name'

describe('Campaigns',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
    it('Check the Campaign Components',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickCampaignButton()
        cy.CheckYourCampaignContainer()
        cy.CheckExperienceCampaignContainer()
    })
    it('Create New Campaign',()=>{
        cy.ClickCampaignButton()
        cy.ClickNewCampaignButton()
        cy.CreateCampaignNameAndDescription()
        cy.ClickCategoryButton()
        cy.AssertMetricCategoryModal()

    })
})