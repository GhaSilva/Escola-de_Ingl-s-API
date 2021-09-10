const { Router } = require('express')
const { pegaUmaMtricula } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/pessoas/todos', PessoaController.pegaTodasAspessoas)
router.get(`/pessoas/:id`, PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId' , PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId' , PessoaController.apagaMatricula)

module.exports = router