const sql = require('mssql');
const config = require('../config/connector');

const getProducts = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Product`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset);
            })
        }
    })
}

const getProduct = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            request.query(`SELECT * FROM Product WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(r.recordset[0]);
            })
        }
    })
}

const addProduct = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();
            var data = req.body;

            request.query(`INSERT INTO Product (name, stock, price, image, category_id) VALUES
            ('${data.name}', ${data.stock}, ${data.price}, '${data.image}', ${data.categoryId})`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const deleteProduct = (req, res) =>
{
    sql.connect(config, (err) => 
    {
        if (err)
            res.status(400).send(err.message);
        else 
        {
            var request = new sql.Request();

            request.query(`DELETE FROM Product WHERE id = ${req.params.id}`, (e, r) => 
            {
                if (e)
                    res.status(400).send(e.message);
                else    
                    res.status(200).send(true);
            })
        }
    })
}

const updateProduct = (req, res) =>
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

            request.query(`UPDATE Product SET name = '${data.name}', stock = ${data.stock}, price = ${data.price}, 
            image = '${data.image}', category_id = ${data.categoryId} WHERE id = ${data.id}`, (e, r) => 
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
    getProducts, 
    getProduct, 
    addProduct, 
    deleteProduct, 
    updateProduct
}