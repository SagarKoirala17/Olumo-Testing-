import '../partials/campaign_homepage_components'
import '../questions/campaign_questions'
import '../partials/campaign_name'
import { credentials } from '../../../credentials'

describe('Draft Campaigns',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
    it('Publishing the draft campaign',()=>{
        cy.ClickCampaignButton()
        cy.ClickDraftCampaignbutton()
        cy.SelectDraftAssessment()
        cy.ClickCategoryButton()
        cy.AssertMetricCategoryModal()
        cy.CreateCategories()
        cy.wait(5000)
        cy.FetchCategoryID()
        cy.FetchCategoryNumber()
        cy.AssertCategoriesContainer()
        cy.AssertPlaybookPage()
        cy.RedirectPlaybookPage()
        cy.CreateCampaignNameAndDescription()
        cy.ClickNextButton()
        cy.AssertQuestionCategoryContainer()
        cy.ClickAddQuestionButton()
        cy.CreateCampaignQuestions()
        cy.ClickNextButtonInQuestionsPage()
        cy.ClickTermsAndConditionsLink()
        cy.ClickAgreeButton()
        cy.ClickPublishButton()
        cy.ClickActivateCampaignButton()
        cy.ClickEditRecipientListLink()
        cy.ClickAddPeopleButton()
        cy.SelectCampaignRecipients()
        cy.ClickBackButton()
        cy.ClickActivateButton()


        
    })
})