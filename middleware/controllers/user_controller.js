const sql = require('mssql');
const config = require('../config/connector');

const getUsers = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM User`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset);
            })
        }
    })
}

const getUser = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM User WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset[0]);
            })
        }
    })
}

const addUser = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`INSERT INTO User (name, pass, image, usertype_id) 
            VALUES ('${data.name}', '${data.pass}', '${data.image}', ${data.usertypeId})`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const deleteUser = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();

            request.query(`DELETE FROM User WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const updateUser = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
        {
            console.log('SQL Connection Error');
            res.status(400).send(err.message);
        }
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`UPDATE User SET name = '${data.name}', pass = '${data.pass}', 
            image = '${data.image}', usertype_id = ${data.usertypeId} WHERE id = ${data.id}`, (e, r) => 
            {
                if (e)
                {
                    console.log('SQL Query Error');
                    res.status(400).send(e.message);
                }
                else    
                    res.status(200).send(true);
            })
        }
    })
}

module.exports =
{
    getUsers, 
    getUser, 
    addUser, 
    deleteUser, 
    updateUser
}