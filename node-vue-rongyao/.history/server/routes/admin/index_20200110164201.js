/*
 * @Author: JianMo 
 * @Date: 2020-01-06 11:30:39 
 * @Last Modified by: JianMo
 * @Last Modified time: 2020-01-10 16:42:01
 */
module.exports = app =>{
    const express = require('express');
    const router = express.Router();
    const Category = require('../../models/Category')

    router.post('/categories',async (req,res) =>{
      const model = await Categrory.create(req,res);
      res.send(model);
    })
    app.use('/admin/api',router)
}