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
    define(['ApiClient', 'model/DefaultResponse', 'model/PublicPriceChangeResponse', 'model/PublicPriceCurrentResponse', 'model/PublicPriceHistoryResponse', 'model/PublicSummaryResponse', 'model/PublicSymbolsResponse', 'model/PublicTrendResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DefaultResponse'), require('../model/PublicPriceChangeResponse'), require('../model/PublicPriceCurrentResponse'), require('../model/PublicPriceHistoryResponse'), require('../model/PublicSummaryResponse'), require('../model/PublicSymbolsResponse'), require('../model/PublicTrendResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CryptoWeather) {
      root.CryptoWeather = {};
    }
    root.CryptoWeather.PublicApi = factory(root.CryptoWeather.ApiClient, root.CryptoWeather.DefaultResponse, root.CryptoWeather.PublicPriceChangeResponse, root.CryptoWeather.PublicPriceCurrentResponse, root.CryptoWeather.PublicPriceHistoryResponse, root.CryptoWeather.PublicSummaryResponse, root.CryptoWeather.PublicSymbolsResponse, root.CryptoWeather.PublicTrendResponse);
  }
}(this, function(ApiClient, DefaultResponse, PublicPriceChangeResponse, PublicPriceCurrentResponse, PublicPriceHistoryResponse, PublicSummaryResponse, PublicSymbolsResponse, PublicTrendResponse) {
  'use strict';

  /**
   * Public service.
   * @module api/PublicApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PublicApi. 
   * @alias module:api/PublicApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1PublicPriceChangeSymbolGet operation.
     * @callback module:api/PublicApi~v1PublicPriceChangeSymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicPriceChangeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Change
     * 
     * @param {String} symbol The cryptocurrency symbol.
     * @param {module:api/PublicApi~v1PublicPriceChangeSymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicPriceChangeResponse}
     */
    this.v1PublicPriceChangeSymbolGet = function(symbol, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicPriceChangeSymbolGet");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicPriceChangeResponse;

      return this.apiClient.callApi(
        '/v1/public/price-change/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicPriceCurrentSymbolGet operation.
     * @callback module:api/PublicApi~v1PublicPriceCurrentSymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicPriceCurrentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price Current
     * 
     * @param {String} symbol The cryptocurrency symbol, provide `all` to get every symbol.
     * @param {module:api/PublicApi~v1PublicPriceCurrentSymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicPriceCurrentResponse}
     */
    this.v1PublicPriceCurrentSymbolGet = function(symbol, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicPriceCurrentSymbolGet");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicPriceCurrentResponse;

      return this.apiClient.callApi(
        '/v1/public/price-current/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicPriceHistorySymbolPeriodIntervalGet operation.
     * @callback module:api/PublicApi~v1PublicPriceHistorySymbolPeriodIntervalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicPriceHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price History
     * 
     * @param {String} symbol The cryptocurrency symbol, provide `all` to get every symbol.
     * @param {String} period The period to get data for, such as past 30 days.
     * @param {String} interval The bar interval, such as 1 day.
     * @param {module:api/PublicApi~v1PublicPriceHistorySymbolPeriodIntervalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicPriceHistoryResponse}
     */
    this.v1PublicPriceHistorySymbolPeriodIntervalGet = function(symbol, period, interval, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicPriceHistorySymbolPeriodIntervalGet");
      }

      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling v1PublicPriceHistorySymbolPeriodIntervalGet");
      }

      // verify the required parameter 'interval' is set
      if (interval === undefined || interval === null) {
        throw new Error("Missing the required parameter 'interval' when calling v1PublicPriceHistorySymbolPeriodIntervalGet");
      }


      var pathParams = {
        'symbol': symbol,
        'period': period,
        'interval': interval
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicPriceHistoryResponse;

      return this.apiClient.callApi(
        '/v1/public/price-history/{symbol}/{period}/{interval}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicSummaryGet operation.
     * @callback module:api/PublicApi~v1PublicSummaryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Summary
     * 
     * @param {module:api/PublicApi~v1PublicSummaryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicSummaryResponse}
     */
    this.v1PublicSummaryGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicSummaryResponse;

      return this.apiClient.callApi(
        '/v1/public/summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicSymbolsGet operation.
     * @callback module:api/PublicApi~v1PublicSymbolsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicSymbolsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Symbols
     * 
     * @param {module:api/PublicApi~v1PublicSymbolsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicSymbolsResponse}
     */
    this.v1PublicSymbolsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicSymbolsResponse;

      return this.apiClient.callApi(
        '/v1/public/symbols', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicTrendSymbolGet operation.
     * @callback module:api/PublicApi~v1PublicTrendSymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicTrendResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trend
     * The trend response contains a collection of forecasts for different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price
     * @param {String} symbol The cryptocurrency symbol.
     * @param {module:api/PublicApi~v1PublicTrendSymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicTrendResponse}
     */
    this.v1PublicTrendSymbolGet = function(symbol, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicTrendSymbolGet");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PublicTrendResponse;

      return this.apiClient.callApi(
        '/v1/public/trend/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
