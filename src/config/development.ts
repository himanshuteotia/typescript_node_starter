
import merge from "deepmerge";
import production from './production';

const config = {
    port : 3000,
    debug: true,
} satisfies Record<string,number|boolean>

export default merge(production,config) as typeof production;