module.exports = function(app){
	app.get('/formulario_add_noticia',function(req, res){
		app.app.controllers.admin.formulario_add_noticia(app, req, res);
	});	

	app.post('/noticias/salvar',function(req, res){
		app.app.controllers.admin.noticias_salvar(app, req, res);
	});
}
