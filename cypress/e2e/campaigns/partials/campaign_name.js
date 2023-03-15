import {campaignNames} from '../../../campaign_name_and_description'
import {campaignDescriptions} from '../../../campaign_name_and_description'
import { categoryIntendedResults } from '../../../category'
import { categoryDescriptions } from '../../../category'
import { campaignCategories } from '../../../category'

Cypress.Commands.add('CreateCampaignNameAndDescription',()=>{
    window.randomIndex = Math.floor(Math.random() * campaignDescriptions.length)
    cy.get('#campaign_name').clear().type(campaignNames[window.randomIndex])
    cy.get('#campaign_description').clear().type(campaignDescriptions[window.randomIndex])


})
Cypress.Commands.add('CreateCategories',()=>{
    const categoryIndex= Math.floor(Math.random()*campaignCategories.length)
    cy.get('#category_name').type(campaignCategories[categoryIndex])
    cy.get('#category_intended_result').type(categoryIntendedResults[categoryIndex])
    cy.get('#category_description').type(categoryDescriptions[categoryIndex])
    cy.get(':nth-child(4) > .actions > .btn').click()
})