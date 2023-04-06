import '../partials/campaign_homepage_components'
import '../questions/campaign_questions'
import { credentials } from '../../../credentials'
describe('Draft Campaigns',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
    it('Publishing the draft campaign',()=>{
        cy.ClickDraftCampaignbutton()
        cy.ClickCampaignButton()
    })
})