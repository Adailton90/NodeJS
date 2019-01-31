module.exports.formulario_add_noticia = function (app, req, res) {
	res.render("admin/form_add_noticia", {validacao:{}, noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;

	console.log(noticia);
	req.assert('titulo','titulo não pode ser vazio').notEmpty();
	req.assert('resumo','Resumo Obrigatorio').notEmpty();
	req.assert('resumo','resumo entre 10 e 100').len(10,100);
	req.assert('autor','autor não pode ser vazio').notEmpty();
	req.assert('data_noticia','data não pode ser vazio').notEmpty()/*.isDate({format: 'YYYY-MM-DD'})*/;
	req.assert('noticia','noticia não pode ser vazio').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = app.config.dbConnection();
	var noticiasModel =  new app.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia,function(error, result){
 		res.redirect('/noticias');
 	});	
	  	
}