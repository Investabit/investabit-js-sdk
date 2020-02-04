# CryptoWeather.PublicApi

All URIs are relative to *https://api.cryptoweather.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PublicPriceChangeSymbolGet**](PublicApi.md#v1PublicPriceChangeSymbolGet) | **GET** /v1/public/price-change/{symbol} | Price Change
[**v1PublicPriceCurrentSymbolGet**](PublicApi.md#v1PublicPriceCurrentSymbolGet) | **GET** /v1/public/price-current/{symbol} | Price Current
[**v1PublicPriceHistorySymbolPeriodIntervalGet**](PublicApi.md#v1PublicPriceHistorySymbolPeriodIntervalGet) | **GET** /v1/public/price-history/{symbol}/{period}/{interval} | Price History
[**v1PublicSummaryGet**](PublicApi.md#v1PublicSummaryGet) | **GET** /v1/public/summary | Summary
[**v1PublicSymbolsGet**](PublicApi.md#v1PublicSymbolsGet) | **GET** /v1/public/symbols | Symbols
[**v1PublicTrendSymbolGet**](PublicApi.md#v1PublicTrendSymbolGet) | **GET** /v1/public/trend/{symbol} | Trend


<a name="v1PublicPriceChangeSymbolGet"></a>
# **v1PublicPriceChangeSymbolGet**
> PublicPriceChangeResponse v1PublicPriceChangeSymbolGet(symbol)

Price Change



### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var symbol = "btc"; // String | The cryptocurrency symbol.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicPriceChangeSymbolGet(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 

### Return type

[**PublicPriceChangeResponse**](PublicPriceChangeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicPriceCurrentSymbolGet"></a>
# **v1PublicPriceCurrentSymbolGet**
> PublicPriceCurrentResponse v1PublicPriceCurrentSymbolGet(symbol)

Price Current



### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var symbol = "btc"; // String | The cryptocurrency symbol, provide `all` to get every symbol.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicPriceCurrentSymbolGet(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol, provide `all` to get every symbol. | 

### Return type

[**PublicPriceCurrentResponse**](PublicPriceCurrentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicPriceHistorySymbolPeriodIntervalGet"></a>
# **v1PublicPriceHistorySymbolPeriodIntervalGet**
> PublicPriceHistoryResponse v1PublicPriceHistorySymbolPeriodIntervalGet(symbol, period, interval)

Price History



### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var symbol = "btc"; // String | The cryptocurrency symbol, provide `all` to get every symbol.

var period = "30d"; // String | The period to get data for, such as past 30 days.

var interval = "1d"; // String | The bar interval, such as 1 day.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicPriceHistorySymbolPeriodIntervalGet(symbol, period, interval, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol, provide `all` to get every symbol. | 
 **period** | **String**| The period to get data for, such as past 30 days. | 
 **interval** | **String**| The bar interval, such as 1 day. | 

### Return type

[**PublicPriceHistoryResponse**](PublicPriceHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicSummaryGet"></a>
# **v1PublicSummaryGet**
> PublicSummaryResponse v1PublicSummaryGet()

Summary



### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicSummaryGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PublicSummaryResponse**](PublicSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicSymbolsGet"></a>
# **v1PublicSymbolsGet**
> PublicSymbolsResponse v1PublicSymbolsGet()

Symbols



### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicSymbolsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PublicSymbolsResponse**](PublicSymbolsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicTrendSymbolGet"></a>
# **v1PublicTrendSymbolGet**
> PublicTrendResponse v1PublicTrendSymbolGet(symbol)

Trend

The trend response contains a collection of forecasts for different intervals with the following attributes.  + `time_start` start time of the period the forecast is applicable for  + `time_end` end time of the period the forecast is applicable for  + `interval` interval in hours that the forecast is applicable for  + `weighted_price` forecasted weighted price during the period  + `change_pct` percent change in price for forecasted weighted_price relative to current price  + `change_usd` dollar change in price for forecasted weighted_price relative to current price

### Example
```javascript
var CryptoWeather = require('crypto_weather');

var apiInstance = new CryptoWeather.PublicApi();

var symbol = "btc"; // String | The cryptocurrency symbol.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicTrendSymbolGet(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol. | 

### Return type

[**PublicTrendResponse**](PublicTrendResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

