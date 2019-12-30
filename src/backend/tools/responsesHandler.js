import config from '../config';

const successResponse = 'success';
const errorRespone = 'error';

exports.success = (message, data) => {
    return {
        status: successResponse,
        result: data,
        message
    };
};

exports.error = (message, data, err = {}) => {
    const commonResponseError = {
        status: errorRespone,
        result: data,
        message
    };
    if (process.env.NODE_ENV === config.modeDev && err?.stack) {
        return {
            ...commonResponseError,
            completeErrorStack: err.stack
        };
    }
    return commonResponseError;

};