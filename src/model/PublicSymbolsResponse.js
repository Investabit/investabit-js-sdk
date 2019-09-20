/*
 * Investabit
 * The Investabit API allows for access to all of the public facing services provided, including market data and forecasts.  ## General Overview  1. All API methods will be built to adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following   - success, true if it was successful   - code, the http status code (also in the response header)          200 if response is successful          400 if bad request          401 if authorization JWT is wrong or limit exceeded          404 wrong route          500 for any internal errors  - status, the status of the request, default **success**  - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     * http://jwt.io     * https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PublicSymbolsResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PublicSymbolsResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.Investabit) {
      root.Investabit = {};
    }
    root.Investabit.PublicSymbolsResponse = factory(root.Investabit.ApiClient, root.Investabit.PublicSymbolsResponseData);
  }
}(this, function(ApiClient, PublicSymbolsResponseData) {
  'use strict';

  /**
   * The PublicSymbolsResponse model module.
   * @module model/PublicSymbolsResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PublicSymbolsResponse</code>.
   * @alias module:model/PublicSymbolsResponse
   * @class
   * @param success {Boolean} 
   * @param code {Number} 
   * @param status {String} 
   * @param data {module:model/PublicSymbolsResponseData} 
   */
  var exports = function(success, code, status, data) {
    this.success = success;
    this.code = code;
    this.status = status;
    this.data = data;
  };

  /**
   * Constructs a <code>PublicSymbolsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicSymbolsResponse} obj Optional instance to populate.
   * @return {module:model/PublicSymbolsResponse} The populated <code>PublicSymbolsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('data'))
        obj.data = PublicSymbolsResponseData.constructFromObject(data['data']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Object]);
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/PublicSymbolsResponseData} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {Array.<Object>} errors
   */
  exports.prototype.errors = undefined;

  return exports;

}));
