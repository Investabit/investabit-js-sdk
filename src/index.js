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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CurrentRoute', 'model/DefaultResponse', 'model/PriceHistoryRoute', 'model/PublicCurrentResponse', 'model/PublicCurrentResponseData', 'model/PublicPriceResponse', 'model/PublicPriceResponseData', 'model/PublicPriceResponseDataHistory', 'model/PublicSymbolsResponse', 'model/PublicSymbolsResponseData', 'model/PublicSymbolsResponseDataSymbols', 'model/PublicTrendResponse', 'model/PublicTrendResponseData', 'model/PublicTrendResponseDataTrend', 'model/SymbolsRoute', 'model/TrendRoute', 'api/PublicApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CurrentRoute'), require('./model/DefaultResponse'), require('./model/PriceHistoryRoute'), require('./model/PublicCurrentResponse'), require('./model/PublicCurrentResponseData'), require('./model/PublicPriceResponse'), require('./model/PublicPriceResponseData'), require('./model/PublicPriceResponseDataHistory'), require('./model/PublicSymbolsResponse'), require('./model/PublicSymbolsResponseData'), require('./model/PublicSymbolsResponseDataSymbols'), require('./model/PublicTrendResponse'), require('./model/PublicTrendResponseData'), require('./model/PublicTrendResponseDataTrend'), require('./model/SymbolsRoute'), require('./model/TrendRoute'), require('./api/PublicApi'));
  }
}(function(ApiClient, CurrentRoute, DefaultResponse, PriceHistoryRoute, PublicCurrentResponse, PublicCurrentResponseData, PublicPriceResponse, PublicPriceResponseData, PublicPriceResponseDataHistory, PublicSymbolsResponse, PublicSymbolsResponseData, PublicSymbolsResponseDataSymbols, PublicTrendResponse, PublicTrendResponseData, PublicTrendResponseDataTrend, SymbolsRoute, TrendRoute, PublicApi) {
  'use strict';

  /**
   * The_Investabit_API_allows_for_access_to_all_of_the_public_facing_services_provided_including_market_data_and_forecasts__General_Overview1__All_API_methods_will_be_built_to_adhere_to_RESTful_best_practices_as_closely_as_possible__As_such_all_API_calls_will_be_made_via_the_standard_HTTP_protocol_using_the_GETPOSTPUTDELETE_request_types_2__Every_request_returns_the_status_as_a_JSON_response_with_the_following____success_true_if_it_was_successful____code_the_http_status_code__also_in_the_response_header________200_if_response_is_successful________400_if_bad_request________401_if_authorization_JWT_is_wrong_or_limit_exceeded________404_wrong_route________500_for_any_internal_errors__status_the_status_of_the_request_default_success__errors_an_array_of_any_relevant_error_details3__For_any_requests_that_are_not_successful_an_error_message_is_specified_and_returned_as_an_array_for_the_errors_key_in_the_JSON_response_4__All_authentication_uses_JSON_Web_Tokens__JWT_which_is_set_as_the_Authorization_entry_in_the_header_see_the_following_for_more_details______httpjwt_io_____httpsscotch_iotutorialsthe_anatomy_of_a_json_web_token.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var InvestabitApi = require('index'); // See note below*.
   * var xxxSvc = new InvestabitApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new InvestabitApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new InvestabitApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new InvestabitApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CurrentRoute model constructor.
     * @property {module:model/CurrentRoute}
     */
    CurrentRoute: CurrentRoute,
    /**
     * The DefaultResponse model constructor.
     * @property {module:model/DefaultResponse}
     */
    DefaultResponse: DefaultResponse,
    /**
     * The PriceHistoryRoute model constructor.
     * @property {module:model/PriceHistoryRoute}
     */
    PriceHistoryRoute: PriceHistoryRoute,
    /**
     * The PublicCurrentResponse model constructor.
     * @property {module:model/PublicCurrentResponse}
     */
    PublicCurrentResponse: PublicCurrentResponse,
    /**
     * The PublicCurrentResponseData model constructor.
     * @property {module:model/PublicCurrentResponseData}
     */
    PublicCurrentResponseData: PublicCurrentResponseData,
    /**
     * The PublicPriceResponse model constructor.
     * @property {module:model/PublicPriceResponse}
     */
    PublicPriceResponse: PublicPriceResponse,
    /**
     * The PublicPriceResponseData model constructor.
     * @property {module:model/PublicPriceResponseData}
     */
    PublicPriceResponseData: PublicPriceResponseData,
    /**
     * The PublicPriceResponseDataHistory model constructor.
     * @property {module:model/PublicPriceResponseDataHistory}
     */
    PublicPriceResponseDataHistory: PublicPriceResponseDataHistory,
    /**
     * The PublicSymbolsResponse model constructor.
     * @property {module:model/PublicSymbolsResponse}
     */
    PublicSymbolsResponse: PublicSymbolsResponse,
    /**
     * The PublicSymbolsResponseData model constructor.
     * @property {module:model/PublicSymbolsResponseData}
     */
    PublicSymbolsResponseData: PublicSymbolsResponseData,
    /**
     * The PublicSymbolsResponseDataSymbols model constructor.
     * @property {module:model/PublicSymbolsResponseDataSymbols}
     */
    PublicSymbolsResponseDataSymbols: PublicSymbolsResponseDataSymbols,
    /**
     * The PublicTrendResponse model constructor.
     * @property {module:model/PublicTrendResponse}
     */
    PublicTrendResponse: PublicTrendResponse,
    /**
     * The PublicTrendResponseData model constructor.
     * @property {module:model/PublicTrendResponseData}
     */
    PublicTrendResponseData: PublicTrendResponseData,
    /**
     * The PublicTrendResponseDataTrend model constructor.
     * @property {module:model/PublicTrendResponseDataTrend}
     */
    PublicTrendResponseDataTrend: PublicTrendResponseDataTrend,
    /**
     * The SymbolsRoute model constructor.
     * @property {module:model/SymbolsRoute}
     */
    SymbolsRoute: SymbolsRoute,
    /**
     * The TrendRoute model constructor.
     * @property {module:model/TrendRoute}
     */
    TrendRoute: TrendRoute,
    /**
     * The PublicApi service constructor.
     * @property {module:api/PublicApi}
     */
    PublicApi: PublicApi
  };

  return exports;
}));
