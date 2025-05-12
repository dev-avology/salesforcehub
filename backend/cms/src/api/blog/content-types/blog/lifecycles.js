module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      console.log('Running beforeCreate. isFeatured:', data.isFeatured);
  
      if (data.isFeatured) {
        await strapi.db.query('api::blog.blog').updateMany({
          where: { isFeatured: true },
          data: { isFeatured: false },
        });
      }
    },
  
    async beforeUpdate(event) {
      const { data } = event.params;
      console.log('Running beforeUpdate. isFeatured:', data.isFeatured);
  
      if (data.isFeatured) {
        await strapi.db.query('api::blog.blog').updateMany({
          where: { isFeatured: true },
          data: { isFeatured: false },
        });
      }
    },
  };
  