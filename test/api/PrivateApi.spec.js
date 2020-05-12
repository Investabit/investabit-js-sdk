/*
 * CryptoWeather
 * The CryptoWeather API allows for access to all of the cryptocurrency data and market forecast services provided. There are two primary categories of routes, `public` and `private`, where `public` routes are accessible to the general public and do not require API authentication, and `private` routes, which require API authentication.  ## General Overview  1. All API methods adhere to RESTful best practices as closely as possible. As such, all API calls will be made via the standard HTTP protocol using the GET/POST/PUT/DELETE request types.  2. Every request returns the status as a JSON response with the following:     - success, true if it was successful     - code, the http status code (also in the response header)         - 200 if response is successful         - 400 if bad request         - 401 if authorization JWT is wrong or limit exceeded         - 404 wrong route         - 500 for any internal errors     - status, the status of the request, default **success**     - errors, an array of any relevant error details  3. For any requests that are not successful an error message is specified and returned as an array for the **errors** key in the JSON response.  4. All authentication uses JSON Web Tokens (JWT), which is set as the **Authorization** entry in the header, see the following for more details.     - http://jwt.io     - https://scotch.io/tutorials/the-anatomy-of-a-json-web-token  ## Code Example  The following is a code example in Python, which demonstrates using the [Python Requests library](https://requests.readthedocs.io/en/master/) for both the `public` and `private` API routes.  ``` import requests  HOST = \"https://api.cryptoweather.ai/v1\"  # Your API key (JWT) API_KEY = \"<YOUR API KEY>\"  # Example public request, no API key required. requests.get(\"{}/public/symbols\".format(HOST)).json()  # Get the current btc price using the public route requests.get(\"{}/public/price-current/{}\".format(HOST, \"btc\")).json()   # Example private request, API key required. Get the btc hourly forecasts headers = {\"Authorization\": \"Bearer {}\".format(API_KEY)} requests.get(\"{}/private/forecast/{}/{}\".format(HOST, \"btc\", \"1h\"),              headers=headers).json() ```
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14-SNAPSHOT
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

  beforeEach(function() {
    instance = new CryptoWeather.PrivateApi();
  });

  describe('(package)', function() {
    describe('PrivateApi', function() {
      describe('v1PrivateAccuracySymbolIntervalPeriodGet', function() {
        it('should call v1PrivateAccuracySymbolIntervalPeriodGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PrivateAccuracySymbolIntervalPeriodGet call and complete the assertions
          /*
          var symbol = "btc";
          var interval = "1h";
          var period = "7d";
          var opts = {};
          opts.cookie = "csrf=b1820141-1bad-4a9c-93c0-52022817ce89";
          opts.xCsrf = "b1820141-1bad-4a9c-93c0-52022817ce89";

          instance.v1PrivateAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PrivateAccuracyResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PrivateAccuracyResponseData);
                  expect(data.data.rmse).to.be.a('number');
              expect(data.data.rmse).to.be();
              expect(data.data.mae).to.be.a('number');
              expect(data.data.mae).to.be();
              expect(data.data.r2).to.be.a('number');
              expect(data.data.r2).to.be();
              {
                let dataCtr = data.data.ci;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be();
                }
              }
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1PrivateForecastSymbolIntervalGet', function() {
        it('should call v1PrivateForecastSymbolIntervalGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PrivateForecastSymbolIntervalGet call and complete the assertions
          /*
          var symbol = "btc";
          var interval = "1h";
          var opts = {};
          opts.cookie = "csrf=b1820141-1bad-4a9c-93c0-52022817ce89";
          opts.xCsrf = "b1820141-1bad-4a9c-93c0-52022817ce89";

          instance.v1PrivateForecastSymbolIntervalGet(symbol, interval, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PrivateForecastResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PrivateForecastResponseData);
                  {
                let dataCtr = data.data.forecast;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PrivateForecastResponseDataForecast);
                  expect(data.timeStart).to.be.a('number');
                  expect(data.timeStart).to.be();
                  expect(data.timeEnd).to.be.a('number');
                  expect(data.timeEnd).to.be();
                  expect(data.low).to.be.a('number');
                  expect(data.low).to.be();
                  expect(data.weightedPrice).to.be.a('number');
                  expect(data.weightedPrice).to.be();
                  expect(data.high).to.be.a('number');
                  expect(data.high).to.be();
                  expect(data.confidence).to.be.a('number');
                  expect(data.confidence).to.be();
                  expect(data.changeUsd).to.be.a('number');
                  expect(data.changeUsd).to.be();
                  expect(data.changePct).to.be.a('number');
                  expect(data.changePct).to.be();
  
                        }
              }
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1PrivateForecastTimeSymbolIntervalPeriodGet', function() {
        it('should call v1PrivateForecastTimeSymbolIntervalPeriodGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PrivateForecastTimeSymbolIntervalPeriodGet call and complete the assertions
          /*
          var symbol = "btc";
          var interval = "1h";
          var period = "7d";
          var opts = {};
          opts.cookie = "csrf=b1820141-1bad-4a9c-93c0-52022817ce89";
          opts.xCsrf = "b1820141-1bad-4a9c-93c0-52022817ce89";

          instance.v1PrivateForecastTimeSymbolIntervalPeriodGet(symbol, interval, period, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PrivateForecastTimeResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PrivateForecastTimeResponseData);
                  expect(data.data.forecastTime).to.be.a('number');
              expect(data.data.forecastTime).to.be();
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1PrivateTrendSymbolGet', function() {
        it('should call v1PrivateTrendSymbolGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PrivateTrendSymbolGet call and complete the assertions
          /*
          var symbol = "btc";
          var opts = {};
          opts.cookie = "csrf=b1820141-1bad-4a9c-93c0-52022817ce89";
          opts.xCsrf = "b1820141-1bad-4a9c-93c0-52022817ce89";

          instance.v1PrivateTrendSymbolGet(symbol, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicTrendResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PublicTrendResponseData);
                  {
                let dataCtr = data.data.trend;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PublicTrendResponseDataTrend);
                  expect(data.timeStart).to.be.a('number');
                  expect(data.timeStart).to.be();
                  expect(data.timeEnd).to.be.a('number');
                  expect(data.timeEnd).to.be();
                  expect(data.interval).to.be.a('string');
                  expect(data.interval).to.be("");
                  expect(data.weightedPrice).to.be.a('number');
                  expect(data.weightedPrice).to.be();
                  expect(data.changeUsd).to.be.a('number');
                  expect(data.changeUsd).to.be();
                  expect(data.changePct).to.be.a('number');
                  expect(data.changePct).to.be();
                  expect(data.confidence).to.be.a('number');
                  expect(data.confidence).to.be();
  
                        }
              }
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1PrivateTrendTabularGet', function() {
        it('should call v1PrivateTrendTabularGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PrivateTrendTabularGet call and complete the assertions
          /*
          var opts = {};
          opts.cookie = "csrf=b1820141-1bad-4a9c-93c0-52022817ce89";
          opts.xCsrf = "b1820141-1bad-4a9c-93c0-52022817ce89";

          instance.v1PrivateTrendTabularGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PrivateTrendTabularResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PrivateTrendTabularResponseData);
                  {
                let dataCtr = data.data.trendTabular;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PrivateTrendTabularResponseDataTrendTabular);
                  expect(data.symbol).to.be.a('string');
                  expect(data.symbol).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  {
                    let dataCtr = data.trend;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(CryptoWeather.PublicTrendResponseDataTrend);
                      expect(data.timeStart).to.be.a('number');
                      expect(data.timeStart).to.be();
                      expect(data.timeEnd).to.be.a('number');
                      expect(data.timeEnd).to.be();
                      expect(data.interval).to.be.a('string');
                      expect(data.interval).to.be("");
                      expect(data.weightedPrice).to.be.a('number');
                      expect(data.weightedPrice).to.be();
                      expect(data.changeUsd).to.be.a('number');
                      expect(data.changeUsd).to.be();
                      expect(data.changePct).to.be.a('number');
                      expect(data.changePct).to.be();
                      expect(data.confidence).to.be.a('number');
                      expect(data.confidence).to.be();
      
                            }
                  }
  
                        }
              }
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
