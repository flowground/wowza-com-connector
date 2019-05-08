# ![LOGO](logo.png) Wowza Streaming Cloud REST API Reference Documentation **flow**ground Connector

## Description

A generated **flow**ground connector for the Wowza Streaming Cloud REST API Reference Documentation API (version 1).

Generated from: https://api.apis.guru/v2/specs/wowza.com/1/swagger.json<br/>
Generated at: 2019-05-07T17:45:01+03:00

## API Description


# About the REST API

The Wowza Streaming Cloud<sup>TM</sup> REST API (application programming interface) offers complete programmatic control over live streams, transcoders, stream sources, and stream targets. Anything you can do in the Wowza Streaming Cloud UI can also be achieved by making HTTP-based requests to cloud-based servers through the REST API.

The Wowza Streaming Cloud REST API features *cross-origin resource sharing*, or CORS.
CORS is a [W3C specification](https://www.w3.org/TR/cors/) that provides headers in HTTP requests to enable a web server to safely make a network request to another domain.

In order to protect shared resources, the Wowza Streaming Cloud REST API is subject to limits. For details, see [Wowza Streaming Cloud REST API limits](https://www.wowza.com/docs/wowza-streaming-cloud-rest-api-limits).
# About this documentation
This reference documentation is based on the open-source [Swagger framework](http://swagger.io/specification/).
It allows you to view the operations, parameters, and request and reponse schemas for every resource. Request samples are presented in cURL (Shell) and JavaScript; some samples also include just the JSON object. Response samples are all JSON.

For more information and examples on using the Wowza Streaming Cloud REST API, see our [library of Wowza Streaming Cloud REST API technical articles](https://www.wowza.com/docs/wowza-streaming-cloud-rest-api).

# Query requirements
The Wowza Streaming Cloud REST API uses HTTP requests to retrieve data from cloud-based servers. Requests must contain proper JSON, two authentication keys, and the correct version number in the base path.

## JSON
The Wowza Streaming Cloud REST API uses the [JSON API specification](http://jsonapi.org/format/) to request and return data. This means requests must include the header `Content-Type: application/json` and must include a single resource object in JSON format as primary data.

Responses include HTTP status codes that indicate whether the query was successful. If there was an error, a description explains the problem so that you can fix it and try again.

## Authentication
Requests to the Wowza Streaming Cloud REST API must be authenticated with two keys: an API key and an access key. Each key is a 64-character alphanumeric string that you can find on the **API Access** page in Wowza Streaming Cloud.

Use the `wsc-api-key` and `wsc-access-key` headers to authenticate requests, like this (in cURL):

```bash
curl -H 'wsc-api-key: [64-character-api-key-goes-here]' -H 'wsc-access-key: [64-character-access-key-goes-here]'
```

<!-- ReDoc-Inject: <security-definitions> -->

## Version
The Wowza Streaming Cloud API is currently at version 1.0.0. Use `v1` in your base path in every request, like this path to the live_streams endpoint:
```
https://api.cloud.wowza.com/api/v1/live_streams
```
## Example query
Here is a complete example POST request, in cURL, with proper JSON syntax, headers, authentication, and version information:
```bash
curl -H 'wsc-api-key: [64-character-api-key-goes-here]' -H 'wsc-access-key: [64-character-access-key-goes-here]'
  -H 'Content-Type: application/json' -X POST -d '{
    "live_stream": {
      "name": "My live Stream",
      "...": "..."
    }
  }' https://api.cloud.wowza.com/api/v1/live_streams
```


## Authorization

Supported authorization schemes:
- API Key- API Key
## Actions

### Fetch Swagger information

> This operation shows the details of the Swagger specification.

*Tags:* `specs`

### Fetch all live streams

> This operation shows the details of all of your live streams.

*Tags:* `live_streams`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Create a live stream

> This operation creates a live stream.

*Tags:* `live_streams`

### Delete a live stream

> This operation deletes a live stream, including all assigned outputs and targets.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Fetch a live stream

> This operation shows the details of a specific live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Update a live stream

> This operation updates a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Regenerate the connection code for a live stream

> This operation regenerates the connection code of a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Reset a live stream

> This operation resets a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Start a live stream

> This operation starts a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Fetch the state of a live stream

> This operation shows the current state of a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Fetch metrics for an active live stream

> This operation returns a hash of metrics keys, each of which identifies a status, text description, unit, and value.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Stop a live stream

> This operation stops a live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Fetch the thumbnail URL of a live stream

> This operation shows the thumbnail URL of a started live stream.

*Tags:* `live_streams`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the live stream.

### Fetch all players

> This operation shows the details of all of your players.

*Tags:* `players`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Fetch a player

> This operation shows details of a specific player.

*Tags:* `players`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the player.

### Update a player

> This operation updates a player.

*Tags:* `players`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the player.

### Rebuild player code

> This operation rebuilds the player with the current configuration.

*Tags:* `players`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the player.

### Fetch the state of a player

> This operation shows the current state of a player.

*Tags:* `players`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the player.

### Fetch all player URLs

> This operation shows the details of all player URLs.

*Tags:* `players`

#### Input Parameters
* `player_id` - _required_ - The unique alphanumeric string that identifies the player.

### Create a player URL

> This operation creates a new player URL.

*Tags:* `players`

#### Input Parameters
* `player_id` - _required_ - The unique alphanumeric string that identifies the player.

### Delete a player URL

> This operation deletes a player URL.

*Tags:* `players`

#### Input Parameters
* `player_id` - _required_ - The unique alphanumeric string that identifies the player.
* `id` - _required_ - The unique alphanumeric string that identifies the player URL.

### Fetch a player URL

> This operation shows the details of a player URL.

*Tags:* `players`

#### Input Parameters
* `player_id` - _required_ - The unique alphanumeric string that identifies the player.
* `id` - _required_ - The unique alphanumeric string that identifies the player URL.

### Update a player URL

> This operation updates a player URL.

*Tags:* `players`

#### Input Parameters
* `player_id` - _required_ - The unique alphanumeric string that identifies the player.
* `id` - _required_ - The unique alphanumeric string that identifies the player URL.

### Fetch all recordings

> This operation shows the details of all of your recordings.

*Tags:* `recordings`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Delete a recording

> This operation deletes a recording.

*Tags:* `recordings`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the recording.

### Fetch a recording

> This operation shows the details of a specific recording.

*Tags:* `recordings`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the recording.

### Fetch the state of a recording

> This operation shows the current state of a recording.

*Tags:* `recordings`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the recording.

### Fetch all schedules

> This operation shows the details of all of your schedules.

*Tags:* `schedules`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Create a schedule

> This operation creates a schedule.

*Tags:* `schedules`

### Delete a schedule

> This operation deletes a schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Fetch a schedule

> This operation shows the details of a specific schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Update a schedule

> This operation updates a schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Disable a schedule

> This operation disables a schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Enable a schedule

> This operation enables a schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Fetch the state of a schedule

> This operation shows the current state of a schedule.

*Tags:* `schedules`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the schedule.

### Fetch all stream sources

> This operation shows the details of all of your stream sources.

*Tags:* `stream_sources`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Add a stream source

> This operation adds a stream source.

*Tags:* `stream_sources`

### Deprecated operation

> POST /stream_sources/add/ is deprecated. To add a stream source, use POST /stream_sources instead.

*Tags:* `stream_sources`

### Delete a stream source

> This operation deletes a stream source.

*Tags:* `stream_sources`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream source.

### Fetch a stream source

> This operation shows details of a specific stream source.

*Tags:* `stream_sources`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream source.

### Update a stream source

> This operation updates a stream source.

*Tags:* `stream_sources`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream source.

### Fetch all stream targets

> This operation lists the details of all of your stream targets.

*Tags:* `stream_targets`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Create a stream target

> This operation creates a stream target. There are three types of targets that you can create: <strong>CustomStreamTarget</strong> for an an external, third-party destination; <strong>WowzaStreamTarget</strong> for a Wowza CDN target; or <strong>UltraLowLatencyStreamTarget</strong> for an ultra low latency Wowza CDN target. The availability of many parameters depends on the type of target you create.

*Tags:* `stream_targets`

### Deprecated operation

> POST /stream_targets/add/ is deprecated. To add a stream target, use POST /stream_targets instead.

*Tags:* `stream_targets`

### Delete a stream target

> This operation deletes a stream target.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch a stream target

> This operation shows details of a specific stream target.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Update a stream target

> This operation updates a stream target.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch current health metrics for an active Wowza ultra low latency stream target

> This operation returns a snapshot of the current connection and throughput details for an active target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The interval for current metrics is 30 seconds from the moment of the query.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch historic health metrics for a Wowza ultra low latency stream target

> This operation shows historic connection and throughput details for target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.
* `from` - _optional_ - The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
* `to` - _optional_ - The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
* `interval` - _optional_ - The length of time for a block of metrics. The default is **10m** (10 minutes).
    Possible values: second, minute, hour, day, month, #s, #m, #h, #d.

### Regenerate the connection code for a stream target

> This operation regenerates the connection code of a stream target.

*Tags:* `stream_targets`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch geo-blocking for a stream target

> This operation shows the details of geo-blocking applied to a specific stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Update geo-blocking for a stream target

> This operation updates the geo-blocking applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Create geo-blocking for a stream target

> This operation allows you to block or whitelist viewing of a stream target by geographic location. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked. For more information see the technical article [How to geo-block stream targets by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-geo-block-stream-targets-by-using-the-wowza-streaming-cloud-rest-api).

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch all properties of a stream target

> This operation shows the details of all of the properties assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Create a property for a stream target

> This operation creates a property for a stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Delete a stream target property

> This operation removes a property from a stream target.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.
* `id` - _required_ - The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

### Fetch a property of a stream target

> This operation shows the details of a specific property assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.
* `id` - _required_ - The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

### Fetch token authorization for a stream target

> This operation shows the details of the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Update token authorization for a stream target

> This operation updates the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Create token authorization for a stream target

> This operation creates token authorization for a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization. For more information see the technical article [How to protect stream targets with token authorization by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-protect-streams-with-token-authorization-by-using-the-wowza-streaming-cloud-rest-api).

*Tags:* `stream_targets`

#### Input Parameters
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch all transcoders

> This operation shows the details of all of your transcoders.

*Tags:* `transcoders`

#### Input Parameters
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Create a transcoder

> This operation creates a transcoder.

*Tags:* `transcoders`

### Delete a transcoder

> This operation deletes a transcoder, including all of its assigned output renditions and stream targets.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch a transcoder

> This operation shows the details of a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Update a transcoder

> This operation updates a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Disable a transcoder's stream targets

> This operation disables all of the stream targets assigned to a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Enable a transcoder's stream targets

> This operation enables all of the stream targets assigned to a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch a transcoder's recordings

> This operation shows the details of all of the recordings for a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Reset a transcoder

> This operation resets a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch transcoder's schedules

> This operation shows the details of all of the schedules for a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Start a transcoder

> This operation starts a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch the state and uptime ID of a transcoder

> This operation shows the current state and uptime ID of a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch statistics for a current transcoder

> This operation responds with a hash of metrics (keys) for a currently running transcoder. Each key has a <strong>status</strong>, <strong>text</strong> (description), <strong>units</strong>, and <strong>value</strong>.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Stop a transcoder

> This operation stops a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch the thumbnail URL of a transcoder

> This operation shows the thumbnail URL of a started transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Fetch all outputs of a transcoder

> This operation shows the details of all of the output renditions of a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Create an output

> This operation creates an output rendition for a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Delete an output

> This operation deletes an output, including all of its assigned targets.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Fetch an output

> This operation shows the details of a specific output rendition for a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Update an output

> This operation updates an output rendition.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Deprecated operation

> The operation POST /transcoders/{transcoder_id}/outputs/{id}/add_stream_target is deprecated. Use POST /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets to add an existing stream target to an output.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Deprecated operation

> The operation DELETE /transcoders/{transcoder_id}/outputs/{id}/remove_stream_target is deprecated. Use DELETE /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{id} to remove a stream target from an output.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Fetch all output stream targets of an output of a transcoder

> This operation shows the details of all of the output stream targets of an output of a transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Create an output stream target

> This operation creates an output stream target. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.

### Delete an output stream target

> This operation deletes an output stream target, including all of its assigned targets.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch an output stream target

> This operation shows the details of an output stream target.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Update an output stream target

> This operation updates an output stream target.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Disable an output stream target

> This operation disables an output stream target.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Enable an output stream target

> This operation enables an output stream target.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Restart an output stream target

> This operation restarts an output stream target.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `output_id` - _required_ - The unique alphanumeric string that identifies the output rendition.
* `stream_target_id` - _required_ - The unique alphanumeric string that identifies the stream target.

### Fetch a transcoder's properties

> This operation shows all of the properties of a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Create a property for a transcoder

> This operation creates a property for a transcoder. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.

### Delete a transcoder's property

> This operation deletes a specific property from a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

### Fetch a property for a transcoder

> This operation shows the details of a specific property for a specific transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

### Fetch all uptime records for a transcoder

> This operation shows all of the uptime records for a specific transcoder. An <em>uptime record</em> identifies a specific transcoding session.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `page` - _optional_ - Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
* `per_page` - _optional_ - For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

### Fetch an uptime record

> This operation shows the details of a specific uptime record for a specific transcoder. An <em>uptime record</em> identifies a transcoding session.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the uptime record.

### Fetch current stream health metrics for an active transcoder

> This operation returns a snapshot of the current source connection and processing details of an active (running) transcoder.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the uptime record.
* `fields` - _optional_ - A comma-separated list of fields to return.

### Fetch historic stream health metrics for a transcoder

> This operation shows the historic source connection and processing details for a transcoding session (uptime record). The transcoder can be running or stopped. Metrics are recorded every 20 seconds.

*Tags:* `transcoders`

#### Input Parameters
* `transcoder_id` - _required_ - The unique alphanumeric string that identifies the transcoder.
* `id` - _required_ - The unique alphanumeric string that identifies the uptime record.
* `fields` - _optional_ - A comma-separated list of fields to return.
* `from` - _optional_ - The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
* `to` - _optional_ - The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.

### Fetch network usage for all stream sources

> This operation shows the amount of network usage for all stream sources in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `network`

#### Input Parameters
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

### Fetch network usage for all stream targets

> This operation shows the amount of network usage for all stream targets in the account cumulatively and individually. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `network`

#### Input Parameters
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

### Fetch network usage for all transcoders

> This operation shows the amount of network usage (egress) for all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `network`

#### Input Parameters
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
* `transcoder_type` - _optional_ - The type of transcoder. The default is <strong>transcoded</strong>.
    Possible values: transcoded, passthrough.
* `billing_mode` - _optional_ - The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
    Possible values: pay_as_you_go, twentyfour_seven.

### Fetch peak recording storage

> This operation shows the amount of peak recording storage used for the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `storage`

#### Input Parameters
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

### Fetch stream processing time

> This operation shows the amount of stream processing time used by all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `processing time`

#### Input Parameters
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
* `transcoder_type` - _optional_ - The type of transcoder. The default is <strong>transcoded</strong>.
    Possible values: transcoded, passthrough.
* `billing_mode` - _optional_ - The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
    Possible values: pay_as_you_go, twentyfour_seven.

### Fetch viewer data for a stream target

> This operation shows viewer data for a specific stream target. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

*Tags:* `viewer data`

#### Input Parameters
* `id` - _required_ - The unique alphanumeric string that identifies the stream target.
* `from` - _optional_ - The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
* `to` - _optional_ - The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

## License

**flow**ground :- Telekom iPaaS / wowza-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
