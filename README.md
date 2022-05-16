# Automate Ciara

We want to automate the snack-ordering process!

## How to run the app
- Clone this repo
- Run npm i
- We are using environment variables in a .json file to store the login details
    - Make a file called cypress.env.json with the following structure:
`
{
    "ciaras_email": ,
    "ciaras_password":
}
`
    - Contact Evie for the sensitive values you should store here
- Run `npm run test` to execute all the tests without running the Cypress automation app
- Run `npm run cypress` to open the Cypress automation app and select the automation you want to run in the browser