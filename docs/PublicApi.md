# Investabit.PublicApi

All URIs are relative to *https://api.investabit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PublicPriceChangeSymbolGet**](PublicApi.md#v1PublicPriceChangeSymbolGet) | **GET** /v1/public/price-change/{symbol} | Price Change
[**v1PublicPriceCurrentSymbolGet**](PublicApi.md#v1PublicPriceCurrentSymbolGet) | **GET** /v1/public/price-current/{symbol} | Price Current
[**v1PublicPriceHistorySymbolPeriodIntervalGet**](PublicApi.md#v1PublicPriceHistorySymbolPeriodIntervalGet) | **GET** /v1/public/price-history/{symbol}/{period}/{interval} | Price History
[**v1PublicSymbolsGet**](PublicApi.md#v1PublicSymbolsGet) | **GET** /v1/public/symbols | Symbols
[**v1PublicTrendSymbolGet**](PublicApi.md#v1PublicTrendSymbolGet) | **GET** /v1/public/trend/{symbol} | Trend


<a name="v1PublicPriceChangeSymbolGet"></a>
# **v1PublicPriceChangeSymbolGet**
> PublicPriceChangeResponse v1PublicPriceChangeSymbolGet(symbol)

Price Change



### Example
```javascript
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

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
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

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
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

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

<a name="v1PublicSymbolsGet"></a>
# **v1PublicSymbolsGet**
> PublicSymbolsResponse v1PublicSymbolsGet()

Symbols



### Example
```javascript
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

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



### Example
```javascript
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

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

