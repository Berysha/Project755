const Product = require("../models/product")
const slugify = require("slugify")

exports.create = async (req, res) => {
    try{
        console.log(req.body)
        req.body.slug = slugify(req.body.title)
        const newPorduct = await new Product(req.body).save()
        res.json(newPorduct)
    }catch(err) {
        console.log(err)
        res.status(400).send("Create product failed")
    }
};

