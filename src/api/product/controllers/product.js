"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const artikel = await strapi.entityService.findMany(
      "api::product.product",
      query
    );

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(artikel);

    // @ts-ignore
    return this.transformResponse(sanitizedEntity[0]);
  },
}));
