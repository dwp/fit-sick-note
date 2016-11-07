module.exports = function(router, config) {

  router.all(config.routes.step, function(req,res,next){

    router.post('/versions/design-sprint/version-08/app/take-photo', function (req, res) {

      if (req.body.radio_inline_group == "Yes"){
        res.redirect("/versions/design-sprint/version-08/app/take-photo-double-front");
      } else {
        res.render('versions/design-sprint/version-08/app/take-photo');
      }

    });

    next();

  });



  return router;
}
