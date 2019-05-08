/**
 * Auto-generated action file for "Wowza Streaming Cloud REST API Reference Documentation" API.
 *
 * Generated at: 2019-05-07T14:45:01.727Z
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
 * Operation: 'updateLiveStream'
 * Endpoint Path: '/live_streams/{id}'
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
    "aspect_ratio_height": "aspect_ratio_height",
    "aspect_ratio_width": "aspect_ratio_width",
    "closed_caption_type": "closed_caption_type",
    "delivery_method": "delivery_method",
    "delivery_protocols": "delivery_protocols",
    "disable_authentication": "disable_authentication",
    "encoder": "encoder",
    "hosted_page_description": "hosted_page_description",
    "hosted_page_logo_image": "hosted_page_logo_image",
    "hosted_page_sharing_icons": "hosted_page_sharing_icons",
    "hosted_page_title": "hosted_page_title",
    "name": "name",
    "password": "password",
    "player_countdown": "player_countdown",
    "player_countdown_at": "player_countdown_at",
    "player_logo_image": "player_logo_image",
    "player_logo_position": "player_logo_position",
    "player_responsive": "player_responsive",
    "player_type": "player_type",
    "player_video_poster_image": "player_video_poster_image",
    "player_width": "player_width",
    "recording": "recording",
    "remove_hosted_page_logo_image": "remove_hosted_page_logo_image",
    "remove_player_logo_image": "remove_player_logo_image",
    "remove_player_video_poster_image": "remove_player_video_poster_image",
    "source_url": "source_url",
    "target_delivery_protocol": "target_delivery_protocol",
    "use_stream_source": "use_stream_source",
    "username": "username",
    "video_fallback": "video_fallback",
    "live_stream": "live_stream",
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
        operationId: 'updateLiveStream',
        pathName: '/live_streams/{id}',
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