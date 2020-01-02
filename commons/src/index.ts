//  CommonJS spec
//const getPrelogin = require('./prelogin/index');
//module.exports = {getPrelogin};

// ES6 spec
export {
    PreloginState,
    PreloginParams,
    GetPreloginStartAction,
    getPrelogin,
    preloginData,
    preloginReducer
} from './prelogin';
