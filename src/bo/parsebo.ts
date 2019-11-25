import { ParseInterface } from '../interface/parse-interface';
export class ParseBo {
    
    constructor() {}

    public parseDataV1(data:string):ParseInterface { 
        var client:ParseInterface = {
            firstName: data.substring(0,8),
            lastName: data.substring(8,18),
            clientId: data.substring(18)
        }
        return client;
    }
    
    public parseDataV2(data:string):ParseInterface { 
        var fn = data.substring(0,8).split('0');
        var ln = data.substring(8,18).split('0');
        var client = {
            firstName: fn[0],
            lastName: ln[0],
            clientId: data.substring(18,21) + '-' + data.substring(21)
        }
        return client;
    }
}