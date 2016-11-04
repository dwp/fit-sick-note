module.exports = function(router, config) {

  // routing for all pages directly below version/app/
  router.all(config.routes.step, function(req,res,next){

    var requestedPage = req.body.radio_inline_group,
        postData = req.body || {};

    // place version routing below this line:
    if (requestedPage == 'Yes') {
      res.redirect('take-photo-double-front');
    }

    next();

  });

  return router;
}
