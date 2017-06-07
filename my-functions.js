module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders
};

function setJSONBody(requestParams, context, ee, next) {
    // console.log('--------');
    // console.log(requestParams);
    // console.log('--------');

    return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
    // console.log('--------');
    console.log(response.body);
    // console.log('--------');
    return next(); // MUST be called for the scenario to continue
}