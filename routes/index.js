var express = require('express');
var router = express.Router();
const catetyoy = require('../public/data/categroy.json')
const newsinfo = require('../public/data/newsinfo.json')
const newslist = require('../public/data/newslist.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * 获取新闻分类接口
 */
router.get('/getCatetyoy',(req,res) => {
  res.send(catetyoy)
})
/**
 * 获取详情接口
 */
// router.get('/getnewsinfo',(req,res) => {
//   res.send(newsinfo)
// })
/**
 * 获取新闻列表接口
 */
router.get('/getnewlist',(req,res) => {
  let id = req.query.id
  let newsArr = newslist.result.find(item => {
    return item.cid == id
  })
  res.send(newsArr)
})
/**
 * 获取新闻详情接口
 */
router.get('/getNewsInfo',(req,res) => {
  let id = req.query.id
  let newsInfoa = newsinfo.list.find(item=>{
    return item.newsid == id
  })
  res.send(newsInfoa)
})

module.exports = router;
