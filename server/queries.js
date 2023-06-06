const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'digitalAppIndividual',
  password: 'Letsdoit!',
  port: 5432,
})


const getUsers = (request, response) => {
    pool.query('SELECT * FROM registration ORDER BY ordernumber ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.ordernumber)
  
    pool.query('SELECT * FROM registration WHERE ordernumber = $1', [ordernumber], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { ordernumber, fiestname, lastname, email } = request.body
  
    pool.query('INSERT INTO registration (ordernumber, fiestname, lastname, email) VALUES ( 1,mpelemane, thobejane, sea6580@gmail.com) RETURNING *', [ordernumber, fiestname, lastname, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ordernumber: ${results.rows[0].id}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { ordernumber, fiestname, lastname, email } = request.body
  
    pool.query(
      'UPDATE registration SET fiestname = thabo, email = thabo@gmail.com WHERE ordernumber = $1',
      [ordernumber, fiestname, lastname, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ordernumber: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM registration WHERE ordernumber = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ordernumber: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }





