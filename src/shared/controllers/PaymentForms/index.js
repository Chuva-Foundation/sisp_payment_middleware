const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const qs = require('qs');

const schema = require('./schema');

module.exports = {
  create: async (req, res) => {
    const payload = qs.parse(req.body);

    // Validate the request body against the schema
    const { error } = schema.validate(payload);
    if (error) {
      res.statusCode = 400;
      res.body = JSON.stringify({ error: error.details[0].message });
      return res;
    }

    const pathname = path.join(__dirname, '3ds-form.html');
    const page = await fs.promises.readFile(pathname, 'utf8');
    const template = Handlebars.compile(page);

    res.statusCode = 200;
    res.body = template(payload);
    res.headers = {
      'Content-Type': 'text/html'
    }
    
    return res;
  },
};
