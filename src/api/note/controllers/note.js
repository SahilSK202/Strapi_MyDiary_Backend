"use strict";

/**
 * note controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::note.note", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db
      .query("api::note.note")
      .findMany({ where: { date: id }, populate: true });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
