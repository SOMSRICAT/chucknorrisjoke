### Chuck Norris API

General operation
The jokes are available at  https://api.icndb.com

Use HTTP GET to retrieve what you want (read on below for more details). Results can returned as raw JSON data (the default case) or using a JavaScript callback function for script communication.

JSON
In the default case, the result will always look like this:
```Json 
{ "type": ... , "value": ... }
``` 

The type will be “success” on success and something else when something went wrong (more details below). An example of the result of a successful request:
```Json 
{ "type": "success", "value": { "id": 268, "joke": "Time waits for no man. Unless that man is Chuck Norris." } } 
```

Fetching a random joke

URL: http://api.icndb.com/jokes/random

```Json 
{ "type": "success", "value": { "id": , "joke": } }
```