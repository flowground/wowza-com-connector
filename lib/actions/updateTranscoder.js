/**
 * Auto-generated action file for "Wowza Streaming Cloud REST API Reference Documentation" API.
 *
 * Generated at: 2019-05-07T14:45:01.741Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / wowza-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'updateTranscoder'
 * Endpoint Path: '/transcoders/{id}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "broadcast_location": "broadcast_location",
    "buffer_size": "buffer_size",
    "closed_caption_type": "closed_caption_type",
    "delivery_method": "delivery_method",
    "delivery_protocols": "delivery_protocols",
    "description": "description",
    "disable_authentication": "disable_authentication",
    "idle_timeout": "idle_timeout",
    "low_latency": "low_latency",
    "name": "name",
    "password": "password",
    "play_maximum_connections": "play_maximum_connections",
    "protocol": "protocol",
    "recording": "recording",
    "remove_watermark_image": "remove_watermark_image",
    "source_url": "source_url",
    "stream_extension": "stream_extension",
    "stream_smoother": "stream_smoother",
    "stream_source_id": "stream_source_id",
    "suppress_stream_target_start": "suppress_stream_target_start",
    "username": "username",
    "video_fallback": "video_fallback",
    "watermark": "watermark",
    "watermark_height": "watermark_height",
    "watermark_image": "watermark_image",
    "watermark_opacity": "watermark_opacity",
    "watermark_position": "watermark_position",
    "watermark_width": "watermark_width",
    "transcoder": "transcoder",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['wsc-api-key'] = cfg['wsc-api-key'];
    securities['wsc-access-key'] = cfg['wsc-access-key'];

    let callParams = {
        spec: spec,
        operationId: 'updateTranscoder',
        pathName: '/transcoders/{id}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}