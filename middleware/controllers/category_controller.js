const sql = require('mssql');
const config = require('../config/connector');

const getCategories = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Category`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset);
            })
        }
    })
}

const getCategory = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Category WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset[0]);
            })
        }
    })
}

const addCategory = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`INSERT INTO Category (name) 
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

const deleteCategory = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();

            request.query(`DELETE FROM Category WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const updateCategory = (req, res) =>
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

            request.query(`UPDATE Category SET name = '${data.name}' 
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
    getCategories, 
    getCategory, 
    addCategory, 
    deleteCategory, 
    updateCategory
}