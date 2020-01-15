/*
 * CryptoWeather
 * The CryptoWeather API allows for access to all of the cryptocurrency data and market forecast services provided. There are two primary categories of routes, `public` and `private`, where `public` routes are accessible to the general public and do not require API authentication, and `private` routes, which require API authentication.  ## General Overview  1. All API methods adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following:     - success, true if it was successful     - code, the http status code (also in the response header)         - 200 if response is successful         - 400 if bad request         - 401 if authorization JWT is wrong or limit exceeded         - 404 wrong route         - 500 for any internal errors     - status, the status of the request, default **success**     - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     - http://jwt.io     - https://scotch.io/tutorials/the-anatomy-of-a-json-web-token  ## Code Example  The following is a code example in Python, which demonstrates using the [Python Requests library](https://requests.readthedocs.io/en/master/) for both the `public` and `private` API routes.  ``` import requests  HOST = \"https://api.cryptoweather.ai/v1\"  # Your API key (JWT) API_KEY = \"<YOUR API KEY>\"  # Example public request, no API key required. requests.get(\"{}/public/symbols\".format(HOST)).json()  # Get the current btc price using the public route requests.get(\"{}/public/price-current/{}\".format(HOST, \"btc\")).json()   # Example private request, API key required. Get the btc hourly forecasts headers = {\"Authorization\": \"Bearer {}\".format(API_KEY)} requests.get(\"{}/private/forecast/{}/{}\".format(HOST, \"btc\", \"1h\"),              headers=headers).json() ```
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DefaultResponse', 'model/PrivateAccuracyResponse', 'model/PrivateForecastResponse', 'model/PrivateTrendTabularResponse', 'model/PublicTrendResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DefaultResponse'), require('../model/PrivateAccuracyResponse'), require('../model/PrivateForecastResponse'), require('../model/PrivateTrendTabularResponse'), require('../model/PublicTrendResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CryptoWeather) {
      root.CryptoWeather = {};
    }
    root.CryptoWeather.PrivateApi = factory(root.CryptoWeather.ApiClient, root.CryptoWeather.DefaultResponse, root.CryptoWeather.PrivateAccuracyResponse, root.CryptoWeather.PrivateForecastResponse, root.CryptoWeather.PrivateTrendTabularResponse, root.CryptoWeather.PublicTrendResponse);
  }
}(this, function(ApiClient, DefaultResponse, PrivateAccuracyResponse, PrivateForecastResponse, PrivateTrendTabularResponse, PublicTrendResponse) {
  'use strict';

  /**
   * Private service.
   * @module api/PrivateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PrivateApi. 
   * @alias module:api/PrivateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1PrivateAccuracySymbolIntervalPeriodGet operation.
     * @callback module:api/PrivateApi~v1PrivateAccuracySymbolIntervalPeriodGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateAccuracyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accuracy
     * The accuracy response contains the following attributes.  + `rmse` Root Mean Square Error  + `mae` Mean Absolute error  + `r2` R Squared  + `ci` Confidence Interval lower and upper error bounds
     * @param {String} symbol The cryptocurrency symbol.
     * @param {String} interval The forecast interval, 1h or 1d.
     * @param {String} period The period for computing the accuracy, such as the past 7 days.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cookie e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {String} opts.xCsrf e.g. b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {module:api/PrivateApi~v1PrivateAccuracySymbolIntervalPeriodGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateAccuracyResponse}
     */
    this.v1PrivateAccuracySymbolIntervalPeriodGet = function(symbol, interval, period, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PrivateAccuracySymbolIntervalPeriodGet");
      }

      // verify the required parameter 'interval' is set
      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling v1PrivateAccuracySymbolIntervalPeriodGet");
      }

      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling v1PrivateAccuracySymbolIntervalPeriodGet");
      }


      var pathParams = {
        'symbol': symbol,
        'interval': interval,
        'period': period
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Cookie': opts['cookie'],
        'X-csrf': opts['xCsrf']
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PrivateAccuracyResponse;

      return this.apiClient.callApi(
        '/v1/private/accuracy/{symbol}/{interval}/{period}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PrivateForecastSymbolIntervalGet operation.
     * @callback module:api/PrivateApi~v1PrivateForecastSymbolIntervalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateForecastResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forecast
     * The forecast response contains a sequence of forecasts at the specified intervals, with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `low` forecasted high during the period  + `high` forecasted low during the period  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price
     * @param {String} symbol The cryptocurrency symbol.
     * @param {String} interval The forecast interval, 1h or 1d.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cookie e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {String} opts.xCsrf e.g. b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {module:api/PrivateApi~v1PrivateForecastSymbolIntervalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateForecastResponse}
     */
    this.v1PrivateForecastSymbolIntervalGet = function(symbol, interval, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PrivateForecastSymbolIntervalGet");
      }

      // verify the required parameter 'interval' is set
      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling v1PrivateForecastSymbolIntervalGet");
      }


      var pathParams = {
        'symbol': symbol,
        'interval': interval
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Cookie': opts['cookie'],
        'X-csrf': opts['xCsrf']
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PrivateForecastResponse;

      return this.apiClient.callApi(
        '/v1/private/forecast/{symbol}/{interval}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PrivateTrendSymbolGet operation.
     * @callback module:api/PrivateApi~v1PrivateTrendSymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicTrendResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trend
     * The trend response contains a collection of forecasts for different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price
     * @param {String} symbol The cryptocurrency symbol.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cookie e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {String} opts.xCsrf e.g. b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {module:api/PrivateApi~v1PrivateTrendSymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicTrendResponse}
     */
    this.v1PrivateTrendSymbolGet = function(symbol, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PrivateTrendSymbolGet");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Cookie': opts['cookie'],
        'X-csrf': opts['xCsrf']
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicTrendResponse;

      return this.apiClient.callApi(
        '/v1/private/trend/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PrivateTrendTabularGet operation.
     * @callback module:api/PrivateApi~v1PrivateTrendTabularGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrivateTrendTabularResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trend Tabular
     * The trend tabular response contains a collection of forecasts for all supported cryptocurrencies at different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price
     * @param {Object} opts Optional parameters
     * @param {String} opts.cookie e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {String} opts.xCsrf e.g. b1820141-1bad-4a9c-93c0-52022817ce89
     * @param {module:api/PrivateApi~v1PrivateTrendTabularGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrivateTrendTabularResponse}
     */
    this.v1PrivateTrendTabularGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Cookie': opts['cookie'],
        'X-csrf': opts['xCsrf']
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PrivateTrendTabularResponse;

      return this.apiClient.callApi(
        '/v1/private/trend-tabular', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
