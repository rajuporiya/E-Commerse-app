const Category = require("../Models/category");


exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
      if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
    });
  };


exports.createCategory =  (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save Category in DB"
            })
        }
        res.json({category});
    })
} 

exports.getCategory = (req, res) => {

    return res.json(req.category);

}

exports.getAllCategories = (req, res) => {
    Category.find().exec((err, categories) => {
        if(err){
            res.status(400).json({
                error: "No categories Found"
            })
        }
        res.json(categories);
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err, updatedCategory) => {
        if(err){
            return res.status(400).json({
                error: "Not able to update Category in DB"
            })
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory = (req, res) => {
    const category = req.category;
    const categoryName = category.name;
    category.remove((err, category) => {
        
      if(err)
        {
            return res.status(400).json({
                error: "Failed to delete this category"
        })}
        res.json({
            message: `${categoryName} Successfully Deleted`
        })

    })
}
