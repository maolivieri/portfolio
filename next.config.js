const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com']
  },
  i18n
};
