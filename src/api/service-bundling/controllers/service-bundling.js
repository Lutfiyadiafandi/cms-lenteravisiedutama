'use strict';

/**
 * service-bundling controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-bundling.service-bundling');
