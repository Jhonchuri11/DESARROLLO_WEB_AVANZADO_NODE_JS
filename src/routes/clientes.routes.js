import { Router } from "express";
import pool from "../database.js";

const router = Router();

// Funcion que permite recoger data de la bd | metodo GET
router.get('/list', async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cliente');
        res.render('clientes/list', { clientes: result });
    } catch (error) {
        res.status(500).json({ message:error.message });
    }
});

// Funcion que permite guardar  data nueva en   la bd | metodo POST

router.get('/add', (req, res) => {
    res.render('clientes/add');
});

router.post('/add', async(req, res) => {
    try {
        const {nomcli, apecli, nrodnicli, telcli} = req.body;
        const newCliente = {
            nomcli, apecli, nrodnicli, telcli
        }
        await pool.query('INSERT INTO cliente SET ?', [newCliente]);
        res.redirect('/list');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Funcion que recoge data por medio del ID CLIENTE

router.get('/edit/:idcli', async(req, res) => {
    try {
        const {idcli} = req.params;
        const [cliente] = await pool.query('SELECT * FROM cliente WHERE idcli = ?', [idcli]);
        const clienteEdit = cliente[0];
        res.render('clientes/edit', { cliente: clienteEdit});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Funcion que recoge data del form para guardar los nuevos datos y actualizar los campos del cliente ID

router.post('/edit/:idcli', async(req, res) => {
    try {
        const { nomcli, apecli, nrodnicli, telcli } = req.body;
        const {idcli} = req.params;
        const editCliente = { nomcli, apecli, nrodnicli, telcli };
        await pool.query('UPDATE cliente SET ? WHERE idcli = ?', [editCliente, idcli]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Funcion que permite eliminar un cliente de la tabla
router.get('/delete/:idcli', async(req, res) => {
    try {
        const {idcli} = req.params;
        await pool.query('DELETE FROM cliente WHERE idcli = ?', [idcli]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;