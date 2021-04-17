/*
 * Copyright 2020 by Samsung Eletrônica da Amazônia Ltda. All rights reserved.
 *
 * This software and its code is the confidential ("Confidential Information")
 * and proprietary information of Samsung Eletrônica da Amzônia Ltda.
 * You shall not disclose such Confidential Information and shall use it only in accordance
 * with the terms of the license agreement you entered into with Samsung Eletrônica da Amazônia Ltda.
 */
const { Model } = require('sequelize');

class BaseModel extends Model {
    static init(schema, options) {
        super.init({
            ...schema
        }, {
            ...options,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
}

module.exports = BaseModel;
