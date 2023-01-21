const getAllTasks = (req, res) => {
  res.send('all all tasks')
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const postTask = (req, res) => {
  res.json(req.body)
}

const updateTask = (req, res) => {
  res.send('update single task')
}

const deleteTask = (req, res) => {
  res.send('delete single task')
}

module.exports = {
  getAllTasks,
  getTask,
  postTask,
  updateTask,
  deleteTask,
}