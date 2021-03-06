/*
 * CryptoWeather
 * The CryptoWeather API allows for access to all of the cryptocurrency data and market forecast services provided. There are two primary categories of routes, `public` and `private`, where `public` routes are accessible to the general public and do not require API authentication, and `private` routes, which require API authentication.  ## General Overview  1. All API methods adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following:     - success, true if it was successful     - code, the http status code (also in the response header)         - 200 if response is successful         - 400 if bad request         - 401 if authorization JWT is wrong or limit exceeded         - 404 wrong route         - 500 for any internal errors     - status, the status of the request, default **success**     - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     - http://jwt.io     - https://scotch.io/tutorials/the-anatomy-of-a-json-web-token  ## Code Example  The following is a code example in Python, which demonstrates using the [Python Requests library](https://requests.readthedocs.io/en/master/) for both the `public` and `private` API routes.  ``` import requests  HOST = \"https://api.cryptoweather.ai/v1\"  # Your API key (JWT) API_KEY = \"<YOUR API KEY>\"  # Example public request, no API key required. requests.get(\"{}/public/symbols\".format(HOST)).json()  # Get the current btc price using the public route requests.get(\"{}/public/price-current/{}\".format(HOST, \"btc\")).json()   # Example private request, API key required. Get the btc hourly forecasts headers = {\"Authorization\": \"Bearer {}\".format(API_KEY)} requests.get(\"{}/private/forecast/{}/{}\".format(HOST, \"btc\", \"1h\"),              headers=headers).json() ```
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
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
    factory(root.expect, root.CryptoWeather);
  }
}(this, function(expect, CryptoWeather) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PrivateForecastResponseDataForecast', function() {
      beforeEach(function() {
        instance = new CryptoWeather.PrivateForecastResponseDataForecast();
      });

      it('should create an instance of PrivateForecastResponseDataForecast', function() {
        // TODO: update the code to test PrivateForecastResponseDataForecast
        expect(instance).to.be.a(CryptoWeather.PrivateForecastResponseDataForecast);
      });

      it('should have the property timeStart (base name: "time_start")', function() {
        // TODO: update the code to test the property timeStart
        expect(instance).to.have.property('timeStart');
        // expect(instance.timeStart).to.be(expectedValueLiteral);
      });

      it('should have the property timeEnd (base name: "time_end")', function() {
        // TODO: update the code to test the property timeEnd
        expect(instance).to.have.property('timeEnd');
        // expect(instance.timeEnd).to.be(expectedValueLiteral);
      });

      it('should have the property low (base name: "low")', function() {
        // TODO: update the code to test the property low
        expect(instance).to.have.property('low');
        // expect(instance.low).to.be(expectedValueLiteral);
      });

      it('should have the property weightedPrice (base name: "weighted_price")', function() {
        // TODO: update the code to test the property weightedPrice
        expect(instance).to.have.property('weightedPrice');
        // expect(instance.weightedPrice).to.be(expectedValueLiteral);
      });

      it('should have the property high (base name: "high")', function() {
        // TODO: update the code to test the property high
        expect(instance).to.have.property('high');
        // expect(instance.high).to.be(expectedValueLiteral);
      });

      it('should have the property confidence (base name: "confidence")', function() {
        // TODO: update the code to test the property confidence
        expect(instance).to.have.property('confidence');
        // expect(instance.confidence).to.be(expectedValueLiteral);
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
