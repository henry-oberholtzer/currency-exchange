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
        const option = document.createElement("option");
        option.setAttribute("value", currencyName[0]);
        option.append(`${currencyName[0]}: ${currencyName[1]}`);
        currencyFromOptions.append(option);
        currencyToOptions.append(option);
    });
};

const printCurrencyError = (response) => {
    return response;
};

document.getElementById("form").addEventListener("submit", makeExchangeRateCall);
window.addEventListener("load", makeCountryCodesCall);