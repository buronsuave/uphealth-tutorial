const sql = require('mssql');
const config = require('../config/connector');

const getRecords = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Record`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset);
            })
        }
    })
}

const getRecord = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Record WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset[0]);
            })
        }
    })
}

const addRecord = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`INSERT INTO Record (product_name, product_price, amount, user_name, date) 
            VALUES ('${data.productName}', ${data.productPrice}, ${data.amount}, '${data.userName}', '${data.date}')`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const deleteRecord = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();

            request.query(`DELETE FROM Record WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const updateRecord = (req, res) =>
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

            request.query(`UPDATE Record SET product_name = '${data.productName}', product_price = ${data.productPrice}, 
            amount = ${data.amount}, user_name = ${data.userName}, date = '${data.date}' WHERE id = ${data.id}`, (e, r) => 
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
    getRecords, 
    getRecord, 
    addRecord, 
    deleteRecord, 
    updateRecord
}