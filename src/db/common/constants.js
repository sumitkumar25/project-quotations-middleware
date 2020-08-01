const commonConstants = {}
commonConstants.databaseName = '';
commonConstants.authorsCollectionName = 'Authors';
commonConstants.publicationsCollectionName = 'Publications';
commonConstants.mongoUrl = 'mongodb://127.0.0.1:27017';

commonConstants.RESPONSE_CODE_ERROR = 400;
commonConstants.RESPONSE_CODE_SUCCESS_CREATED = 201;
commonConstants.RESPONSE_CODE_SUCCESS = 200;
commonConstants.RESPONSE_CODE_CATCH_ERROR = 500;
commonConstants.RESPONSE_CODE_CATCH_404 = 404;

module.exports = commonConstants;