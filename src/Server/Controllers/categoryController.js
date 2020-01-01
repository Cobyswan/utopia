const Category = require("../../DB/models/category");
const { errorHandler } = require("../../Helpers/dbErrorHandler");


exports.createCategory = (req, res) => {
    console.log(req.body)
    const category = new Category(req.body)
    category.save((err, data) => {
        if(err || !data){
            res.status(400).json({error: errorHandler(err)})
        }
        res.json({data});
    })
}

