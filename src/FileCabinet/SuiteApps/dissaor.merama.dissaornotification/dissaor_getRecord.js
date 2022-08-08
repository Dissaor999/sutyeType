/**
 *@NApiVersion 2.x
 *@NScriptType Restlet
 *@Author Dissaor
 */
define(['N/record', 'N/error'],
    function (record, error) {
        function doValidation(args, argNames, methodName) {
            for (var i = 0; i < args.length; i++)
                if (!args[i] && args[i] !== 0)
                    throw error.create({
                        name: 'MISSING_REQ_ARG',
                        message: 'Missing a required argument: [' + argNames[i] + '] for method: ' + methodName
                    });
        }
        // Get a standard NetSuite record
        function _get(context) {
            doValidation([context.recordtype, context.id], ['recordtype', 'id'], 'GET');
            return record.load({
                type: context.recordtype,
                id: context.id
            });
        }

        return {
            get: _get,
        };
    }); 