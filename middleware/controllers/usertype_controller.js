const sql = require('mssql');
const config = require('../config/connector');

const getUserTypes = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM UserType`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset);
            })
        }
    })
}

const getUserType = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM UserType WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset[0]);
            })
        }
    })
}

const addUserType = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`INSERT INTO UserType (name) 
            VALUES ('${data.name}')`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const deleteUserType = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();

            request.query(`DELETE FROM UserType WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const updateUserType = (req, res) =>
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

            request.query(`UPDATE UserType SET name = '${data.name}' 
            WHERE id = ${data.id}`, (e, r) => 
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
    getUserTypes, 
    getUserType, 
    addUserType, 
    deleteUserType, 
    updateUserType
}