'use strict';

/**
 * service-bundling router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-bundling.service-bundling');
