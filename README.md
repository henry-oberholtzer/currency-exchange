# Currency Exchange

A JS application to calculate an exchange rate between two currencies based on the [ExchangeRate-API](https://exchangerate-api.com)

By Henry Oberholtzer

## Technologies Used

*   JavaScript
*   Bootstrap
*   HTML
*   CSS
*   Webpack
*   ExchangeRate-API

## Description

### User Stories

*   User should be able to enter an amount in USD
*   User should be able to specify a currency to convert to
*   User should recieve the USD amount converted to their currency of choice
*   User should have access to at least five different currencies
*   User should see a message in the DOM when an error is recieved
*   If a particular currency is not available to convert from, user should recieve a message in the DOM to that effect

#### Extra Features

*   Allow for converting between all currency types
*   Allow for convertion from and to USD
*   Cache API results
*   Dropdown menu for currencies

### Technical Requirements

*   Application must make an API call
*   Application must parse data from the API call
*   Application must handle errors when the API does not retrun 200 OK status
*   Application must use a static method in a class
*   Application must seperate UI logic & business logic
*   Application must use webpack

## Setup/Installation Requirements

*   A personal API key must first be obtained from [ExchangeRate-API](https://exchangerate-api.com)
* Download the repository using `git clone https://github.com/henry-oberholtzer/currency-exchange.git` in terminal or downloading the ZIP folder from github
* Create a ".env" file in the root folder containing `API_KEY=YOURAPIKEYHERE`
* Run "npm install" in terminal in the root folder
* To view the application, run `npm run start`

## Known Bugs

*   None at the moment

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023
Code licensed under GNU GPLv3
