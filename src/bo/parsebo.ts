import { ParseInterface } from '../interface/parse-interface';
import * as pconnst from '../constants/parseConstant';
export class ParseBo {
    
    // regex1 = /(\D{1,}0+)/g;
	// onlystringwithoutnumber = /\D+/g;
	// regex2 = /([1-9][0-9])+/g;
    // formattednumberregex = /^(\d{3})(\d{0,})$/;
    // clientEmpty:ParseInterface = {
    //     firstName: '',
    //     lastName: '',
    //     clientId: ''
    // }
    
    constructor() {}

    public parseDataV1(data:string):ParseInterface { 
        var resData = this.extractData(data,true);
        if (resData != null) {
            var client:ParseInterface = {
                firstName: resData[0],
                lastName: resData[1],
                clientId: resData[2]
            }
            return client;
        }
        return pconnst.clientEmpty;
    }
    
    public parseDataV2(data:string):ParseInterface { 
        
        var resData = this.extractData(data,false);
        if (resData != null) {
            var client = {
                 firstName: resData[0],
                lastName: resData[1],
                clientId: this.formatNumber(resData[2])
            }
            return client;
        }

        return pconnst.clientEmpty;
    }

    private extractData(rawdata: string, v1: boolean){		
		
		var a = rawdata.match(v1?pconnst.regex1:pconnst.onlystringwithoutnumber);
		var b = rawdata.match(pconnst.regex2);		
        if ((a != null) && (b != null)) {
            return a.concat(b);
        }
        return null;
    }
    
    private formatNumber(rawString: string) {

        var match = rawString.match(pconnst.formattednumberregex)
        if (match) {
          return match[1] + '-' + match[2]
        }
        return '';
  }; 
}