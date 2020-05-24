# CryptoWeather.PrivateApi

All URIs are relative to *https://api.cryptoweather.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PrivateAccuracySymbolIntervalPeriodGet**](PrivateApi.md#v1PrivateAccuracySymbolIntervalPeriodGet) | **GET** /v1/private/accuracy/{symbol}/{interval}/{period} | Accuracy
[**v1PrivateForecastAccuracySymbolIntervalPeriodGet**](PrivateApi.md#v1PrivateForecastAccuracySymbolIntervalPeriodGet) | **GET** /v1/private/forecast-accuracy/{symbol}/{interval}/{period} | Forecast Accuracy
[**v1PrivateForecastSymbolIntervalGet**](PrivateApi.md#v1PrivateForecastSymbolIntervalGet) | **GET** /v1/private/forecast/{symbol}/{interval} | Forecast
[**v1PrivateForecastTimeSymbolIntervalPeriodGet**](PrivateApi.md#v1PrivateForecastTimeSymbolIntervalPeriodGet) | **GET** /v1/private/forecast-time/{symbol}/{interval}/{period} | Forecast Time
[**v1PrivateTrendSymbolGet**](PrivateApi.md#v1PrivateTrendSymbolGet) | **GET** /v1/private/trend/{symbol} | Trend
[**v1PrivateTrendTabularGet**](PrivateApi.md#v1PrivateTrendTabularGet) | **GET** /v1/private/trend-tabular | Trend Tabular


<a name="v1PrivateAccuracySymbolIntervalPeriodGet"></a>
# **v1PrivateAccuracySymbolIntervalPeriodGet**
> PrivateAccuracyResponse v1PrivateAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts)

Accuracy

The accuracy response contains the following attributes.  + `rmse` Root Mean Square Error  + `mae` Mean Absolute error  + `r2` R Squared  + `ci` Confidence Interval lower and upper error bounds

### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var symbol = "btc"; // String | The cryptocurrency symbol.

var interval = "1h"; // String | The forecast interval, 1h or 1d.

var period = "7d"; // String | The period for computing the accuracy, such as the past 7 days.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 
 **interval** | **String**| The forecast interval, 1h or 1d. | 
 **period** | **String**| The period for computing the accuracy, such as the past 7 days. | 
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PrivateAccuracyResponse**](PrivateAccuracyResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PrivateForecastAccuracySymbolIntervalPeriodGet"></a>
# **v1PrivateForecastAccuracySymbolIntervalPeriodGet**
> PrivateForecastAccuracyResponse v1PrivateForecastAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts)

Forecast Accuracy



### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var symbol = "btc"; // String | The cryptocurrency symbol.

var interval = "1h"; // String | The forecast interval, 1h or 1d.

var period = "7d"; // String | The period for computing the error bounds, typically 7d or 30d.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateForecastAccuracySymbolIntervalPeriodGet(symbol, interval, period, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 
 **interval** | **String**| The forecast interval, 1h or 1d. | 
 **period** | **String**| The period for computing the error bounds, typically 7d or 30d. | 
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PrivateForecastAccuracyResponse**](PrivateForecastAccuracyResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PrivateForecastSymbolIntervalGet"></a>
# **v1PrivateForecastSymbolIntervalGet**
> PrivateForecastResponse v1PrivateForecastSymbolIntervalGet(symbol, interval, opts)

Forecast

The forecast response contains a sequence of forecasts at the specified intervals, with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `low` forecasted high during the period  + `high` forecasted low during the period  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price

### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var symbol = "btc"; // String | The cryptocurrency symbol.

var interval = "1h"; // String | The forecast interval, 1h or 1d.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateForecastSymbolIntervalGet(symbol, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 
 **interval** | **String**| The forecast interval, 1h or 1d. | 
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PrivateForecastResponse**](PrivateForecastResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PrivateForecastTimeSymbolIntervalPeriodGet"></a>
# **v1PrivateForecastTimeSymbolIntervalPeriodGet**
> PrivateForecastTimeResponse v1PrivateForecastTimeSymbolIntervalPeriodGet(symbol, interval, period, opts)

Forecast Time



### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var symbol = "btc"; // String | The cryptocurrency symbol.

var interval = "1h"; // String | The forecast interval, 1h or 1d.

var period = "7d"; // String | The period for computing the error bounds, typically 7d or 30d.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateForecastTimeSymbolIntervalPeriodGet(symbol, interval, period, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 
 **interval** | **String**| The forecast interval, 1h or 1d. | 
 **period** | **String**| The period for computing the error bounds, typically 7d or 30d. | 
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PrivateForecastTimeResponse**](PrivateForecastTimeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PrivateTrendSymbolGet"></a>
# **v1PrivateTrendSymbolGet**
> PublicTrendResponse v1PrivateTrendSymbolGet(symbol, opts)

Trend

The trend response contains a collection of forecasts for different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price

### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var symbol = "btc"; // String | The cryptocurrency symbol.

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateTrendSymbolGet(symbol, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PublicTrendResponse**](PublicTrendResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PrivateTrendTabularGet"></a>
# **v1PrivateTrendTabularGet**
> PrivateTrendTabularResponse v1PrivateTrendTabularGet(opts)

Trend Tabular

The trend tabular response contains a collection of forecasts for all supported cryptocurrencies at different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price

### Example
```javascript
var CryptoWeather = require('crypto_weather');
var defaultClient = CryptoWeather.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new CryptoWeather.PrivateApi();

var opts = { 
  'cookie': "csrf=b1820141-1bad-4a9c-93c0-52022817ce89", // String | e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89
  'xCsrf': "b1820141-1bad-4a9c-93c0-52022817ce89" // String | e.g. b1820141-1bad-4a9c-93c0-52022817ce89
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PrivateTrendTabularGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cookie** | **String**| e.g. csrf=b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 
 **xCsrf** | **String**| e.g. b1820141-1bad-4a9c-93c0-52022817ce89 | [optional] 

### Return type

[**PrivateTrendTabularResponse**](PrivateTrendTabularResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

