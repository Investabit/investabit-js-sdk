/*
 * Investabit
 * The Investabit API allows for access to all of the public facing services provided, including market data and forecasts.  ## General Overview  1. All API methods will be built to adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following   - success, true if it was successful   - code, the http status code (also in the response header)          200 if response is successful          400 if bad request          401 if authorization JWT is wrong or limit exceeded          404 wrong route          500 for any internal errors  - status, the status of the request, default **success**  - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     * http://jwt.io     * https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Investabit);
  }
}(this, function(expect, Investabit) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PublicPriceCurrentResponseDataCurrent', function() {
      beforeEach(function() {
        instance = new Investabit.PublicPriceCurrentResponseDataCurrent();
      });

      it('should create an instance of PublicPriceCurrentResponseDataCurrent', function() {
        // TODO: update the code to test PublicPriceCurrentResponseDataCurrent
        expect(instance).to.be.a(Investabit.PublicPriceCurrentResponseDataCurrent);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property changeUsd (base name: "change_usd")', function() {
        // TODO: update the code to test the property changeUsd
        expect(instance).to.have.property('changeUsd');
        // expect(instance.changeUsd).to.be(expectedValueLiteral);
      });

      it('should have the property changePct (base name: "change_pct")', function() {
        // TODO: update the code to test the property changePct
        expect(instance).to.have.property('changePct');
        // expect(instance.changePct).to.be(expectedValueLiteral);
      });

    });
  });

}));
