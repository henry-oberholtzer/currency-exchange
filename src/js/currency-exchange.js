export default class CurrencyExchange {
    static getCountryCodes() {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
            .then((response) => {
                if (!response.ok) {
                    const countryCodeError = `${response.result}: ${response["error-type"]}`;
                    throw new Error(countryCodeError);
                }   else {
                    return response.json();
                }
            })
            .catch((error) => {
                return error;
            });
    }
    
    static getExchangeRates() {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
            .then((response) => {
                if (!response.ok) {
                    const exchangeRateError = `${response.result}: ${response["error-type"]}`;
                    throw new Error(exchangeRateError);
                }   else {
                    return response.json();
                }
            })
            .catch((error) => {
                return error;
            });
    }
}