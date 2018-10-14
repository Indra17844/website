var express = require('express');
var router = express.Router();
var models = require('../models/index');
var helpers = require('../helpers');
var constants = require('../constants');
var galleryData = require('../../gallery');

// Routes

router.get('/', function(req, res, next) {
    // var citiesData = helpers.structureViewData('city');
    // var cityKeys = Object.keys(citiesData);
    // var citiesCount = 0;
    // for(var i = 0; i < cityKeys.length;i++){
    //     citiesCount += citiesData[i].length;
    // }
    // var teamData = helpers.structureViewData('team');
    // var partnerData = helpers.structureViewData('partner');
    // var mentorsData = helpers.structureViewData('mentors');
    res.render('pages/home', { title: 'Blockchained India' });
});

router.get('/gallery', function(req, res, next) {
    var data = galleryData;
    console.log(data);
    res.render('pages/gallery', { title: 'Blockchained India Gallery' , GalleryData:data});
});

router.get('/gallery/:id',function(req,res,next){
    var data = galleryData;
    var i;
    for(i=0;i<data.length;i++)
    {
        if(data[i].id === req.params.id)
        {
            break;
        }
    }
    
    res.render('pages/eventGallery',{title: data[i].title, Images:data[i].images});

});

router.get('/talks/:id', function(req, res, next) {
    let talksData = constants.talks();
    // console.log('talksData:', talksData);
    res.render('pages/talks', { title: 'Blockchained India Talks', talksData: talksData });
});

router.get('/demo', function(req, res, next) {
    res.render('pages/demo', { title: 'Blockchained India' });
});

router.get('*', function(req, res, next) {
    res.render('pages/error-pages/not_found', { title: 'Blockchained India | 404 | Not Found' });
});

module.exports = router;
