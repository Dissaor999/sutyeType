/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @Author Dissaor
 */
define([],

    () => {
        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
            const now = new Date();
            var actionRecord = scriptContext.newRecord;
            var id = actionRecord.id;
            var record = actionRecord.type;
            var Responsearr = {
                "resource": "&id="+ id + "&recordtype="+record,
                "user_id": 1203142,//el usuario de Redlemon de netsuite
                "timeline": now.toISOString(),
                "topic": actionRecord.type, //inventoryitem
                "sent": now.toISOString(),
            };
            log.audit({
                "title": "Inventory Event",
                "details": Responsearr
            });
        }

        return { afterSubmit }

    });
