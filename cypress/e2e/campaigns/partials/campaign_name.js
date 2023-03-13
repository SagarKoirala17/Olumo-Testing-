import {campaignNames} from '../../../campaign_name_and_description'
import {campaignDescriptions} from '../../../campaign_name_and_description'

Cypress.Commands.add('CreateCampaignNameAndDescription',()=>{
    const randomIndex = Math.floor(Math.random() * campaignDescriptions.length)
    cy.get('#campaign_name').clear().type(campaignNames[randomIndex])
    cy.get('#campaign_description').clear().type(campaignDescriptions[randomIndex])


})