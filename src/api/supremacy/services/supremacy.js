'use strict';

/**
 * supremacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::supremacy.supremacy');
