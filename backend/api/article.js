module.exports = (app) => {
  const save = (req, res) => {
    const articleData = {...req.body}
    if(req.params.id) articleData.id = req.params.id

    // Validação completa aqui...

    if(articleData.id) {
      app.db('articles')
        .update(articleData)
        .where({id: articleData.id})
        .then(() => res.status(204).send())
        .catch(err => res.status(500).send({error: 'Internal server error'}))
    } else {
      app.db('articles')
        .insert(articleData)
        .then(() => res.status(201).send())
        .catch(err => res.status(500).send({error: 'Internal server error'}))
    }
  }

  const remove = async (req, res, app) => {
    try {
      const rowsDeleted = await app.db('articles')
        .where({id: req.params.id}).del()
      if(rowsDeleted == 0) throw {error: 'Article not found.'}            
    } catch(err) {
      res.status(404).send(err)
    }
  }  

  const limit = 10 //usado para paginação
  const get = async (req, res) => {
    const page = req.query.page || 1
    const result = await app.db('articles').count('id')
  }

}   