# crypto_weather

CryptoWeather - JavaScript client for crypto_weather
The CryptoWeather API allows for access to all of the cryptocurrency data and market forecast services provided. There are two primary categories of routes, `public` and `private`, where `public` routes are accessible to the general public and do not require API authentication, and `private` routes, which require API authentication.  ## General Overview  1. All API methods adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following:     - success, true if it was successful     - code, the http status code (also in the response header)         - 200 if response is successful         - 400 if bad request         - 401 if authorization JWT is wrong or limit exceeded         - 404 wrong route         - 500 for any internal errors     - status, the status of the request, default **success**     - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     - http://jwt.io     - https://scotch.io/tutorials/the-anatomy-of-a-json-web-token  ## Code Example  The following is a code example in Python, which demonstrates using the [Python Requests library](https://requests.readthedocs.io/en/master/) for both the `public` and `private` API routes.  ``` import requests  HOST = \"https://api.cryptoweather.ai/v1\"  # Your API key (JWT) API_KEY = \"<YOUR API KEY>\"  # Example public request, no API key required. requests.get(\"{}/public/symbols\".format(HOST)).json()  # Get the current btc price using the public route requests.get(\"{}/public/price-current/{}\".format(HOST, \"btc\")).json()   # Example private request, API key required. Get the btc hourly forecasts headers = {\"Authorization\": \"Bearer {}\".format(API_KEY)} requests.get(\"{}/private/forecast/{}/{}\".format(HOST, \"btc\", \"1h\"),              headers=headers).json() ```
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install crypto_weather --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your crypto_weather from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('crypto_weather')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CryptoWeather = require('crypto_weather');

var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN"

var api = new CryptoWeather.PrivateApi()

var symbol = "btc"; // {String} The cryptocurrency symbol.

var interval = "1h"; // {String} The forecast interval, 1h or 1d.

var period = "7d"; // {String} The period for computing the accuracy, such as the past 7 days.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // {String} e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // {String} e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.v1PrivateAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cryptoweather.ai*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CryptoWeather.PrivateApi* | [**v1PrivateAccuracySymbolIntervalPeriodGet**](docs/PrivateApi.md#v1PrivateAccuracySymbolIntervalPeriodGet) | **GET** /v1/private/accuracy/{symbol}/{interval}/{period} | Accuracy
*CryptoWeather.PrivateApi* | [**v1PrivateForecastAccuracySymbolIntervalPeriodGet**](docs/PrivateApi.md#v1PrivateForecastAccuracySymbolIntervalPeriodGet) | **GET** /v1/private/forecast-accuracy/{symbol}/{interval}/{period} | Forecast Accuracy
*CryptoWeather.PrivateApi* | [**v1PrivateForecastSymbolIntervalGet**](docs/PrivateApi.md#v1PrivateForecastSymbolIntervalGet) | **GET** /v1/private/forecast/{symbol}/{interval} | Forecast
*CryptoWeather.PrivateApi* | [**v1PrivateForecastTimeSymbolIntervalPeriodGet**](docs/PrivateApi.md#v1PrivateForecastTimeSymbolIntervalPeriodGet) | **GET** /v1/private/forecast-time/{symbol}/{interval}/{period} | Forecast Time
*CryptoWeather.PrivateApi* | [**v1PrivateTrendSymbolGet**](docs/PrivateApi.md#v1PrivateTrendSymbolGet) | **GET** /v1/private/trend/{symbol} | Trend
*CryptoWeather.PrivateApi* | [**v1PrivateTrendTabularGet**](docs/PrivateApi.md#v1PrivateTrendTabularGet) | **GET** /v1/private/trend-tabular | Trend Tabular
*CryptoWeather.PublicApi* | [**v1PublicPriceChangeSymbolGet**](docs/PublicApi.md#v1PublicPriceChangeSymbolGet) | **GET** /v1/public/price-change/{symbol} | Price Change
*CryptoWeather.PublicApi* | [**v1PublicPriceCurrentSymbolGet**](docs/PublicApi.md#v1PublicPriceCurrentSymbolGet) | **GET** /v1/public/price-current/{symbol} | Price Current
*CryptoWeather.PublicApi* | [**v1PublicPriceHistorySymbolPeriodIntervalGet**](docs/PublicApi.md#v1PublicPriceHistorySymbolPeriodIntervalGet) | **GET** /v1/public/price-history/{symbol}/{period}/{interval} | Price History
*CryptoWeather.PublicApi* | [**v1PublicSummaryGet**](docs/PublicApi.md#v1PublicSummaryGet) | **GET** /v1/public/summary | Summary
*CryptoWeather.PublicApi* | [**v1PublicSymbolsGet**](docs/PublicApi.md#v1PublicSymbolsGet) | **GET** /v1/public/symbols | Symbols
*CryptoWeather.PublicApi* | [**v1PublicTrendSymbolGet**](docs/PublicApi.md#v1PublicTrendSymbolGet) | **GET** /v1/public/trend/{symbol} | Trend


## Documentation for Models

 - [CryptoWeather.AccuracyRoute](docs/AccuracyRoute.md)
 - [CryptoWeather.DefaultResponse](docs/DefaultResponse.md)
 - [CryptoWeather.ForecastAccuracyRoute](docs/ForecastAccuracyRoute.md)
 - [CryptoWeather.ForecastRoute](docs/ForecastRoute.md)
 - [CryptoWeather.ForecastTimeRoute](docs/ForecastTimeRoute.md)
 - [CryptoWeather.PriceChangeRoute](docs/PriceChangeRoute.md)
 - [CryptoWeather.PriceCurrentRoute](docs/PriceCurrentRoute.md)
 - [CryptoWeather.PriceHistoryRoute](docs/PriceHistoryRoute.md)
 - [CryptoWeather.PrivateAccuracyResponse](docs/PrivateAccuracyResponse.md)
 - [CryptoWeather.PrivateAccuracyResponseData](docs/PrivateAccuracyResponseData.md)
 - [CryptoWeather.PrivateForecastAccuracyResponse](docs/PrivateForecastAccuracyResponse.md)
 - [CryptoWeather.PrivateForecastAccuracyResponseData](docs/PrivateForecastAccuracyResponseData.md)
 - [CryptoWeather.PrivateForecastResponse](docs/PrivateForecastResponse.md)
 - [CryptoWeather.PrivateForecastResponseData](docs/PrivateForecastResponseData.md)
 - [CryptoWeather.PrivateForecastResponseDataForecast](docs/PrivateForecastResponseDataForecast.md)
 - [CryptoWeather.PrivateForecastTimeResponse](docs/PrivateForecastTimeResponse.md)
 - [CryptoWeather.PrivateForecastTimeResponseData](docs/PrivateForecastTimeResponseData.md)
 - [CryptoWeather.PrivateTrendTabularResponse](docs/PrivateTrendTabularResponse.md)
 - [CryptoWeather.PrivateTrendTabularResponseData](docs/PrivateTrendTabularResponseData.md)
 - [CryptoWeather.PrivateTrendTabularResponseDataTrendTabular](docs/PrivateTrendTabularResponseDataTrendTabular.md)
 - [CryptoWeather.PublicPriceChangeResponse](docs/PublicPriceChangeResponse.md)
 - [CryptoWeather.PublicPriceChangeResponseData](docs/PublicPriceChangeResponseData.md)
 - [CryptoWeather.PublicPriceChangeResponseDataPriceChange](docs/PublicPriceChangeResponseDataPriceChange.md)
 - [CryptoWeather.PublicPriceCurrentResponse](docs/PublicPriceCurrentResponse.md)
 - [CryptoWeather.PublicPriceCurrentResponseData](docs/PublicPriceCurrentResponseData.md)
 - [CryptoWeather.PublicPriceCurrentResponseDataCurrent](docs/PublicPriceCurrentResponseDataCurrent.md)
 - [CryptoWeather.PublicPriceHistoryResponse](docs/PublicPriceHistoryResponse.md)
 - [CryptoWeather.PublicPriceHistoryResponseData](docs/PublicPriceHistoryResponseData.md)
 - [CryptoWeather.PublicPriceHistoryResponseDataHistory](docs/PublicPriceHistoryResponseDataHistory.md)
 - [CryptoWeather.PublicPriceHistoryResponseDataPriceHistory](docs/PublicPriceHistoryResponseDataPriceHistory.md)
 - [CryptoWeather.PublicSummaryResponse](docs/PublicSummaryResponse.md)
 - [CryptoWeather.PublicSummaryResponseColor](docs/PublicSummaryResponseColor.md)
 - [CryptoWeather.PublicSummaryResponseData](docs/PublicSummaryResponseData.md)
 - [CryptoWeather.PublicSymbolsResponse](docs/PublicSymbolsResponse.md)
 - [CryptoWeather.PublicSymbolsResponseData](docs/PublicSymbolsResponseData.md)
 - [CryptoWeather.PublicSymbolsResponseDataSymbols](docs/PublicSymbolsResponseDataSymbols.md)
 - [CryptoWeather.PublicTrendResponse](docs/PublicTrendResponse.md)
 - [CryptoWeather.PublicTrendResponseData](docs/PublicTrendResponseData.md)
 - [CryptoWeather.PublicTrendResponseDataTrend](docs/PublicTrendResponseDataTrend.md)
 - [CryptoWeather.SummaryRoute](docs/SummaryRoute.md)
 - [CryptoWeather.SymbolsRoute](docs/SymbolsRoute.md)
 - [CryptoWeather.TrendRoute](docs/TrendRoute.md)
 - [CryptoWeather.TrendTabluarRoute](docs/TrendTabluarRoute.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: N/A

