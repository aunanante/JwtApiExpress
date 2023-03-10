const { body, validationResult } = require("express-validator");
exports.villeValidator = [
    body("villeName").isString().isLength({ min: 3 }).not().isEmpty(),
    
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]


exports.villeUpdateValidator = [
    body("villeName").isString().isLength({ min: 3 }).optional,
    
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(400).json({ errors: errors.array() });   
        
        next()
    }
]