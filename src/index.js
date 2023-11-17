import './css/styles.css';
import CurrencyExchange from "./js/currency-exchange";

const makeExchangeRateCall = () => {
    return "nothing here yet";
};

const makeCountryCodesCall = () => {
    CurrencyExchange.getCountryCodes()
        .then((response) => {
            if (response["supported_codes"]) {
                printCurrencyList(response);
            } else {
                printCurrencyError(response);
            }
        });
};

const printCurrencyList = (response) => {
    const currencyToOptions = document.getElementById("currencyTo");
    const currencyFromOptions = document.getElementById("currencyFrom");
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
        currencyFromOptions.append(optionFrom);
        currencyToOptions.append(optionTo);
    });
};

const printCurrencyError = (response) => {
    return response;
};

document.getElementById("form").addEventListener("submit", makeExchangeRateCall);
window.addEventListener("load", makeCountryCodesCall);