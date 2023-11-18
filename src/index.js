import './css/styles.css';
import CurrencyExchange from "./js/currency-exchange";

const addToSessionStorage = (name, object) => {
    sessionStorage.setItem(name, JSON.stringify(object));
};

const makeExchangeRateCall = () => {
    if (sessionStorage.exchangeRates) {
        const ratesStored = JSON.parse(sessionStorage.exchangeRates);
        printExchange(ratesStored);
        printTime(ratesStored);
    }   else {
        CurrencyExchange.getExchangeRates()
            .then((response) => {
                if (response["conversion_rates"]) {
                    printExchange(response);
                    addToSessionStorage("exchangeRates", response);
                    printTime(response);
                }   else {
                    printExchangeError(response);
                }
            });
    }
};

const printTime = (response) => {
    const utc = response["time_last_update_utc"];
    const date = new Date(utc);
    const dateString = date.toLocaleDateString();
    document.getElementById("dateUpdated").append(dateString);
};

const printExchange = (response) => {
    const ratesObject = response["conversion_rates"];
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;
    const ratioFrom = ratesObject[currencyFrom];
    const ratioTo = ratesObject[currencyTo];
    const currencyFromAmount = () => {
        const num = parseInt(document.getElementById("currencyFromAmount").value);
        if (num) {
            return num;
        } else {
            return 0;
        }
    };
    const currencyToAmount = document.getElementById("currencyToAmount");
    const conversion = Math.round(((ratioTo / ratioFrom) * currencyFromAmount()) * 100) / 100;
    currencyToAmount.setAttribute("value", conversion);
};

const printExchangeError = (response) => {
    return response;
};

const makeCountryCodesCall = () => {
    if (sessionStorage.countryCodes) {
        const codesStored = JSON.parse(sessionStorage.countryCodes);
        printCurrencyList(codesStored);
    } else {
        CurrencyExchange.getCountryCodes()
            .then((response) => {
                if (response["supported_codes"]) {
                    printCurrencyList(response);
                    addToSessionStorage("countryCodes", response);
                } else {
                    printCurrencyError(response);
                }
            });
    }
};

const printCurrencyList = (response) => {
    const currencyToOptions = document.getElementById("currencyTo");
    const currencyFromOptions = document.getElementById("currencyFrom");
    currencyToOptions.innerHTML = "";
    currencyFromOptions.innerHTML = "";
    response["supported_codes"].forEach((currencyName) => {
        const optionTo = document.createElement("option");
        optionTo.setAttribute("value", currencyName[0]);
        optionTo.append(`${currencyName[0]}: ${currencyName[1]}`);
        const optionFrom = document.createElement("option");
        optionFrom.setAttribute("value", currencyName[0]);
        optionFrom.append(`${currencyName[0]}: ${currencyName[1]}`);
        if (currencyName[0] === "USD") {
            optionFrom.setAttribute("selected", true);
        }
        if (currencyName[0] === "PLN") {
            optionTo.setAttribute("selected", true);
        }
        currencyFromOptions.append(optionFrom);
        currencyToOptions.append(optionTo);
    });
};

const printCurrencyError = (response) => {
    const currencyToOptions = document.getElementById("currencyTo");
    const currencyFromOptions = document.getElementById("currencyFrom");
    const optionToFailed = document.createElement("option");
    const optionFromFailed = document.createElement("option");
    optionToFailed.setAttribute("disabled", true);
    optionFromFailed.setAttribute("disabled", true);
    optionToFailed.append(response);
    optionFromFailed.append(response);
    currencyToOptions.append(optionToFailed);
    currencyFromOptions.append(optionFromFailed);
};

document.getElementById("form").addEventListener("change", () => {
    if (sessionStorage.exchangeRates) {
        const ratesStored = JSON.parse(sessionStorage.exchangeRates);
        printExchange(ratesStored);
    } else {
        makeExchangeRateCall();
    }
});

window.addEventListener("load", () => {
    makeCountryCodesCall();
    makeExchangeRateCall();
});