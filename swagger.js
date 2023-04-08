const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fashion Store Ecommerce Service',
      version: '1.0.0',
      description: 'API documentation for my Express app'
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js']  // Path to the API routes folder
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;