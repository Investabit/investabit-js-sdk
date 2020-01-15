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
    define(['ApiClient', 'model/PublicTrendResponseDataTrend'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PublicTrendResponseDataTrend'));
  } else {
    // Browser globals (root is window)
    if (!root.CryptoWeather) {
      root.CryptoWeather = {};
    }
    root.CryptoWeather.PrivateTrendTabularResponseDataTrendTabular = factory(root.CryptoWeather.ApiClient, root.CryptoWeather.PublicTrendResponseDataTrend);
  }
}(this, function(ApiClient, PublicTrendResponseDataTrend) {
  'use strict';

  /**
   * The PrivateTrendTabularResponseDataTrendTabular model module.
   * @module model/PrivateTrendTabularResponseDataTrendTabular
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PrivateTrendTabularResponseDataTrendTabular</code>.
   * @alias module:model/PrivateTrendTabularResponseDataTrendTabular
   * @class
   * @param symbol {String} 
   * @param name {String} 
   * @param trend {Array.<module:model/PublicTrendResponseDataTrend>} 
   */
  var exports = function(symbol, name, trend) {
    this.symbol = symbol;
    this.name = name;
    this.trend = trend;
  };

  /**
   * Constructs a <code>PrivateTrendTabularResponseDataTrendTabular</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrivateTrendTabularResponseDataTrendTabular} obj Optional instance to populate.
   * @return {module:model/PrivateTrendTabularResponseDataTrendTabular} The populated <code>PrivateTrendTabularResponseDataTrendTabular</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('trend'))
        obj.trend = ApiClient.convertToType(data['trend'], [PublicTrendResponseDataTrend]);
    }
    return obj;
  }

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<module:model/PublicTrendResponseDataTrend>} trend
   */
  exports.prototype.trend = undefined;

  return exports;

}));