import '../partials/campaign_homepage_components'
import { credentials } from '../../../credentials'

describe('Campaigns',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
    it('Check the Campaign Components',()=>{
        cy.ClickCampaignButton()
        cy.CheckYourCampaignContainer()
    })
})