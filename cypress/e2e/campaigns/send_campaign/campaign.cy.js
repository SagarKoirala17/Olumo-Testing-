import '../partials/campaign_homepage_components'
import { credentials } from '../../../credentials'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import '../../campaigns/partials/campaign_name'
import'../questions/campaign_questions'

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
        
        cy.ClickCategoryButton()
        cy.AssertMetricCategoryModal()
        cy.CreateCategories()
        cy.wait(5000)
        cy.FetchCategoryID()
        cy.FetchCategoryNumber()
        cy.AssertCategoriesContainer()
        cy.AssertPlaybookPage()
        //cy.RedirectPlaybookPage()
        
        cy.CreateCampaignNameAndDescription()
        cy.ClickNextButton()
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