'use strict';

/**
 * service-bundling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-bundling.service-bundling');
