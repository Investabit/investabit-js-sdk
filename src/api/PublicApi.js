/**
 * Investabit
 * The Investabit API allows for access to all of the public facing services provided, including market data and forecasts.  ## General Overview  1. All API methods will be built to adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following   - success, true if it was successful   - code, the http status code (also in the response header)          200 if response is successful          400 if bad request          401 if authorization JWT is wrong or limit exceeded          404 wrong route          500 for any internal errors  - status, the status of the request, default **success**  - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     * http://jwt.io     * https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DefaultResponse', 'model/PublicCurrentResponse', 'model/PublicPriceResponse', 'model/PublicSymbolsResponse', 'model/PublicTrendResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DefaultResponse'), require('../model/PublicCurrentResponse'), require('../model/PublicPriceResponse'), require('../model/PublicSymbolsResponse'), require('../model/PublicTrendResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Investabit) {
      root.Investabit = {};
    }
    root.Investabit.PublicApi = factory(root.Investabit.ApiClient, root.Investabit.DefaultResponse, root.Investabit.PublicCurrentResponse, root.Investabit.PublicPriceResponse, root.Investabit.PublicSymbolsResponse, root.Investabit.PublicTrendResponse);
  }
}(this, function(ApiClient, DefaultResponse, PublicCurrentResponse, PublicPriceResponse, PublicSymbolsResponse, PublicTrendResponse) {
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
     * Callback function to receive the result of the v1PublicCurrentSymbolGet operation.
     * @callback module:api/PublicApi~v1PublicCurrentSymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicCurrentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Current
     * 
     * @param {String} symbol The cryptocurrency symbol, default is btc.
     * @param {module:api/PublicApi~v1PublicCurrentSymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicCurrentResponse}
     */
    this.v1PublicCurrentSymbolGet = function(symbol, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicCurrentSymbolGet");
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
      var returnType = PublicCurrentResponse;

      return this.apiClient.callApi(
        '/v1/public/current/{symbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PublicPriceHistorySymbolGet operation.
     * @callback module:api/PublicApi~v1PublicPriceHistorySymbolGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicPriceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price History
     * 
     * @param {String} symbol The cryptocurrency symbol, default is btc.
     * @param {module:api/PublicApi~v1PublicPriceHistorySymbolGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PublicPriceResponse}
     */
    this.v1PublicPriceHistorySymbolGet = function(symbol, callback) {
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling v1PublicPriceHistorySymbolGet");
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
      var returnType = PublicPriceResponse;

      return this.apiClient.callApi(
        '/v1/public/price-history/{symbol}', 'GET',
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
     * 
     * @param {String} symbol The cryptocurrency symbol, default is btc.
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
