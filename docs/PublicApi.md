# Investabit.PublicApi

All URIs are relative to *https://api.investabit.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PublicCurrentSymbolGet**](PublicApi.md#v1PublicCurrentSymbolGet) | **GET** /v1/public/current/{symbol} | Current
[**v1PublicPriceHistorySymbolGet**](PublicApi.md#v1PublicPriceHistorySymbolGet) | **GET** /v1/public/price-history/{symbol} | Price History
[**v1PublicSymbolsGet**](PublicApi.md#v1PublicSymbolsGet) | **GET** /v1/public/symbols | Symbols
[**v1PublicTrendSymbolGet**](PublicApi.md#v1PublicTrendSymbolGet) | **GET** /v1/public/trend/{symbol} | Trend


<a name="v1PublicCurrentSymbolGet"></a>
# **v1PublicCurrentSymbolGet**
> PublicCurrentResponse v1PublicCurrentSymbolGet(symbol)

Current



### Example
```javascript
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

var symbol = "\"btc\""; // String | The cryptocurrency symbol, default is btc.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicCurrentSymbolGet(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol, default is btc. | 

### Return type

[**PublicCurrentResponse**](PublicCurrentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1PublicPriceHistorySymbolGet"></a>
# **v1PublicPriceHistorySymbolGet**
> PublicPriceResponse v1PublicPriceHistorySymbolGet(symbol)

Price History



### Example
```javascript
var Investabit = require('investabit');

var apiInstance = new Investabit.PublicApi();

var symbol = "\"btc\""; // String | The cryptocurrency symbol, default is btc.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1PublicPriceHistorySymbolGet(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The cryptocurrency symbol, default is btc. | 

### Return type

[**PublicPriceResponse**](PublicPriceResponse.md)

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

var symbol = "\"btc\""; // String | The cryptocurrency symbol, default is btc.


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
 **symbol** | **String**| The cryptocurrency symbol, default is btc. | 

### Return type

[**PublicTrendResponse**](PublicTrendResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

