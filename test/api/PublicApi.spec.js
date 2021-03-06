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

  beforeEach(function() {
    instance = new CryptoWeather.PublicApi();
  });

  describe('(package)', function() {
    describe('PublicApi', function() {
      describe('v1PublicPriceChangeSymbolGet', function() {
        it('should call v1PublicPriceChangeSymbolGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PublicPriceChangeSymbolGet call and complete the assertions
          /*
          var symbol = "btc";

          instance.v1PublicPriceChangeSymbolGet(symbol, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicPriceChangeResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PublicPriceChangeResponseData);
                  {
                let dataCtr = data.data.priceChange;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PublicPriceChangeResponseDataPriceChange);
                  expect(data.interval).to.be.a('string');
                  expect(data.interval).to.be("");
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
      describe('v1PublicPriceCurrentSymbolGet', function() {
        it('should call v1PublicPriceCurrentSymbolGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PublicPriceCurrentSymbolGet call and complete the assertions
          /*
          var symbol = "btc";

          instance.v1PublicPriceCurrentSymbolGet(symbol, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicPriceCurrentResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PublicPriceCurrentResponseData);
                  {
                let dataCtr = data.data.current;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PublicPriceCurrentResponseDataCurrent);
                  expect(data.symbol).to.be.a('string');
                  expect(data.symbol).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.price).to.be.a('number');
                  expect(data.price).to.be();
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
      describe('v1PublicPriceHistorySymbolPeriodIntervalGet', function() {
        it('should call v1PublicPriceHistorySymbolPeriodIntervalGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PublicPriceHistorySymbolPeriodIntervalGet call and complete the assertions
          /*
          var symbol = "btc";
          var period = "30d";
          var interval = "1d";

          instance.v1PublicPriceHistorySymbolPeriodIntervalGet(symbol, period, interval, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicPriceHistoryResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PublicPriceHistoryResponseData);
                  {
                let dataCtr = data.data.priceHistory;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PublicPriceHistoryResponseDataPriceHistory);
                  expect(data.symbol).to.be.a('string');
                  expect(data.symbol).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  {
                    let dataCtr = data.history;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(CryptoWeather.PublicPriceHistoryResponseDataHistory);
                      expect(data.time).to.be.a('number');
                      expect(data.time).to.be();
                      expect(data.price).to.be.a('number');
                      expect(data.price).to.be();
      
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
      describe('v1PublicSummaryGet', function() {
        it('should call v1PublicSummaryGet successfully', function(done) {
          // TODO: uncomment v1PublicSummaryGet call and complete the assertions
          /*

          instance.v1PublicSummaryGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicSummaryResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(CryptoWeather.PublicSummaryResponseData);
                expect(data.icon).to.be.a('string');
                expect(data.icon).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.symbolName).to.be.a('string');
                expect(data.symbolName).to.be("");
                expect(data.slug).to.be.a('string');
                expect(data.slug).to.be("");
                expect(data.added).to.be.a('number');
                expect(data.added).to.be();
                expect(data.color).to.be.a(CryptoWeather.PublicSummaryResponseColor);
                      expect(data.color.b).to.be.a('number');
                  expect(data.color.b).to.be();
                  expect(data.color.g).to.be.a('number');
                  expect(data.color.g).to.be();
                  expect(data.color.r).to.be.a('number');
                  expect(data.color.r).to.be();
                expect(data.priceBtc).to.be.a('number');
                expect(data.priceBtc).to.be();
                expect(data.priceUsd).to.be.a('number');
                expect(data.priceUsd).to.be();
                expect(data.marketCap).to.be.a('number');
                expect(data.marketCap).to.be();
                expect(data.volumeUsd).to.be.a('number');
                expect(data.volumeUsd).to.be();
                expect(data.changePct).to.be.a('number');
                expect(data.changePct).to.be();
                expect(data.marketDataTime).to.be.a('number');
                expect(data.marketDataTime).to.be();
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
      describe('v1PublicSymbolsGet', function() {
        it('should call v1PublicSymbolsGet successfully', function(done) {
          // TODO: uncomment v1PublicSymbolsGet call and complete the assertions
          /*

          instance.v1PublicSymbolsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CryptoWeather.PublicSymbolsResponse);
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);
            expect(data.code).to.be.a('number');
            expect(data.code).to.be(0);
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.data).to.be.a(CryptoWeather.PublicSymbolsResponseData);
                  {
                let dataCtr = data.data.symbols;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(CryptoWeather.PublicSymbolsResponseDataSymbols);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.symbol).to.be.a('string');
                  expect(data.symbol).to.be("");
  
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
      describe('v1PublicTrendSymbolGet', function() {
        it('should call v1PublicTrendSymbolGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1PublicTrendSymbolGet call and complete the assertions
          /*
          var symbol = "btc";

          instance.v1PublicTrendSymbolGet(symbol, function(error, data, response) {
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
    });
  });

}));
