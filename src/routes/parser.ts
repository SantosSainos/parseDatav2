// Requires
import express, { Request, Response } from 'express';
import { ParseInterface } from '../interface/parse-interface';
import { ParseBo } from '../bo/parsebo';

// Initialize variables
var app = express();

var parseBo = new ParseBo();

// API V1
app.post('/api/v1/parse', (req: Request, res: Response) => {
    var body = req.body.data;
    var client = parseBo.parseDataV1(body);

    res.status(200).json({
        statusCode: 200,
        data: client
    });
});

// API V2
app.post('/api/v2/parse', (req, res) => {

    var body = req.body.data;
    var client = parseBo.parseDataV2(body);

    res.status(200).json({
        statusCode: true,
        data: client
    });
});

module.exports = app;
