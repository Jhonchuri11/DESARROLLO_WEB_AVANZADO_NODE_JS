import { Router } from "express";
import pool from "../database.js";

const router = Router();

// Funcion que permite recoger de la bd los pedidos

router.get('/listpedido', async(req, res) => {
    try {
        const query = `
            SELECT pedido.*, cliente.nomcli
            FROM pedido
            INNER JOIN cliente ON pedido.idcliente = cliente.idcli
        `;
        const [result] = await pool.query(query);
        res.render('pedidos/list', { pedidos: result });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Funcion que permite recoger solo el id del cliente y el nombre para el pedido

router.get('/addpedido', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT idcli, nomcli FROM cliente');
        res.render('pedidos/add', { pedidos: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/addpedido', async (req, res) => {
    try {
        const { idcliente, fecha, estado, total, metodopago } = req.body;
        
        const newPedido = { idcliente, fecha, estado, total, metodopago 
        }

        await pool.query('INSERT INTO pedido SET ?', [newPedido]);
        
        res.redirect('/listpedido');


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Function que recoge data del pedido de cliente por medio del ID

router.get('/editpedido/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const [pedido] = await pool.query('SELECT * FROM pedido WHERE id = ?', [id]);
        const pedidoEdit = pedido[0];
        res.render('pedidos/edit', { pedido: pedidoEdit });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Function que recoge data del form para guardar los nuevos datos y actualizar campo del pedido

router.post('/editpedido/:id', async(req, res) => {
    try {
        const {idcliente, fecha, estado, total, metodopago} = req.body;
        const {id} = req.params;
        const editPedido = { idcliente, fecha, estado, total, metodopago };
        await pool.query('UPDATE pedido SET ? WHERE id = ?', [editPedido, id]);
        res.redirect('/listpedido'); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Function para eliminar un pedido por su ID

router.get('/deletepedido/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM pedido WHERE id = ?', [id]);
        res.redirect('/listpedido');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Siempre exportar la funcion para que pueda ser encontado | Caso contraroo error

export default router;
