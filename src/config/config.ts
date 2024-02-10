
import developmentConfig from "./development";
import productionConfig from "./production"

export enum EnvironmentStr {
    DEVELOPMENT = "development",
    TESTING = "testing",
    STAGE = "staging",
    PRODUCTION = "production",
  }

const {ENVIRONMENT} = process.env;
export const production = ENVIRONMENT === EnvironmentStr.PRODUCTION;
export const development = ENVIRONMENT === EnvironmentStr.DEVELOPMENT;
export const environment = production ? EnvironmentStr.PRODUCTION : EnvironmentStr.DEVELOPMENT;

const config = () =>{
    if(production){
        return productionConfig;
    } else {
        return developmentConfig;
    }
}


export default config();