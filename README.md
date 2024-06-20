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
*   Allow for conversion to and from USD
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

*   Not mobile responsive
*   Queries that result in a number over 4 digits will break out of the UI.

## Licenses & Attribution

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023

Code licensed under GNU GPLv3

Public Domain Images Used:

[Woodcut of a cat](https://www.flickr.com/photos/58558794@N07/5436866230) from Provenance Online Project, 2011

[IC55 P2759 587d](https://www.flickr.com/photos/58558794@N07/6927291684/) from Provenance Online Project, 2011
