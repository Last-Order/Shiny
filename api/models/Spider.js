/**
 * Spider.js
 *
 * @description :: Spider信息表
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    primaryKey: "id",
    attributes: {
        id: {
            type: "number",
            autoIncrement: true,
        },
        name: {
            type: "string",
        },
        path: {
            type: "string",
            allowNull: true,
        },
        description: {
            type: "string",
            columnType: "text",
        },
        group: {
            type: "string",
            allowNull: true,
        },
        info: {
            type: "string",
            columnType: "text",
        },
        last_try: {
            type: "ref",
            columnType: "datetime",
        },
        trigger_count: {
            type: "number",
        },
        trigger_time: {
            type: "ref",
            columnType: "datetime",
        },
    },
};
