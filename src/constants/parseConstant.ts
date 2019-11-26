import { ParseInterface } from "../interface/parse-interface";

// Constants
export const regex1 = /(\D{1,}0+)/g;
export const onlystringwithoutnumber = /\D+/g;
export const regex2 = /([1-9][0-9])+/g;
export const formattednumberregex = /^(\d{3})(\d{0,})$/;
export const clientEmpty:ParseInterface = {
    firstName: '',
    lastName: '',
    clientId: ''
}

