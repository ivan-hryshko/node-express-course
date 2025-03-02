// const express = require('express');
// const app = express()
// const { products } = require('./data')

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log('method, url, time :>> ', method, url, time);
//   next()
// }

// app.get('/api/v1/', logger, (req, res) => {
//   console.log('user touch server');
//   // res.status(200).send('Start page')
//   // res.writeHead(200, { 'content-type': 'application/json'})
//   res.json({ "name": "ivan"})
// })

// app.get('/about', (req, res) => {
//   console.log('user touch server');
//   res.writeHead(200, { 'content-type': 'application/json'})

//   res.status(200).send('about page')
// })

// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:productId', (req, res) => {
//   const { productId } = req.params
//   const singleProduct = products.find((product) => product.id === Number(productId))

//   if (!singleProduct) {
//     res.status(404).send('Product Does Not Exit')
//   }
//   res.json(singleProduct)
// })

// app.listen(5000, () => {
//   console.log('Server listen on port 5000');
// })


//////////


const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
