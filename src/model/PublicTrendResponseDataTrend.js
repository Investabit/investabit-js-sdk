/**
 * Investabit API
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.InvestabitApi) {
      root.InvestabitApi = {};
    }
    root.InvestabitApi.PublicTrendResponseDataTrend = factory(root.InvestabitApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PublicTrendResponseDataTrend model module.
   * @module model/PublicTrendResponseDataTrend
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PublicTrendResponseDataTrend</code>.
   * @alias module:model/PublicTrendResponseDataTrend
   * @class
   * @param interval {String} 
   * @param weightedPrice {Number} 
   * @param changeUsd {Number} 
   * @param changePct {Number} 
   * @param confidence {Number} 
   */
  var exports = function(interval, weightedPrice, changeUsd, changePct, confidence) {
    var _this = this;

    _this['interval'] = interval;
    _this['weighted_price'] = weightedPrice;
    _this['change_usd'] = changeUsd;
    _this['change_pct'] = changePct;
    _this['confidence'] = confidence;
  };

  /**
   * Constructs a <code>PublicTrendResponseDataTrend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicTrendResponseDataTrend} obj Optional instance to populate.
   * @return {module:model/PublicTrendResponseDataTrend} The populated <code>PublicTrendResponseDataTrend</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('weighted_price')) {
        obj['weighted_price'] = ApiClient.convertToType(data['weighted_price'], 'Number');
      }
      if (data.hasOwnProperty('change_usd')) {
        obj['change_usd'] = ApiClient.convertToType(data['change_usd'], 'Number');
      }
      if (data.hasOwnProperty('change_pct')) {
        obj['change_pct'] = ApiClient.convertToType(data['change_pct'], 'Number');
      }
      if (data.hasOwnProperty('confidence')) {
        obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * @member {Number} weighted_price
   */
  exports.prototype['weighted_price'] = undefined;
  /**
   * @member {Number} change_usd
   */
  exports.prototype['change_usd'] = undefined;
  /**
   * @member {Number} change_pct
   */
  exports.prototype['change_pct'] = undefined;
  /**
   * @member {Number} confidence
   */
  exports.prototype['confidence'] = undefined;



  return exports;
}));

