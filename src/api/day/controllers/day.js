"use strict";

/**
 * day controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::day.day", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db
      .query("api::day.day")
      .findOne({ where: { date: id }, populate: true });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
