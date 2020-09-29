import {parse} from "dirty-json";

export function parseStringToJson(value) {
    const str = "[" + value.replace(/\n/g, ",") + "]";
    try {
        return  parse(str);
    }catch (e) {
        throw new Error();
    }
}
