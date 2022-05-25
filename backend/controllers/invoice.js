import Incoice from '../models/invoice.js';

const createInvoice = (req, res) => {
    return Incoice.create(({
        id: req.body.id,
        userId: req.body.userId,
        value: req.body.value,
        date: req.body.date,
        street: req.body.street,
        city: req.body.city
    }))
    .then((_) => {
        return res.status(200).json({message: "invoice created"});
    })
    .catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while creating the invoice"});
    });
}

const getInvoice = (req, res) => {
    return Incoice.findOne({ where : {
        id: req.params.invoiceId, 
    }})
    .then(invoice => {
        const {id, value, date, street, city} = invoice
        return res.status(200).json({user: {id, value, date, street, city},  message: "invoice fetched successfully"});
    }).catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while fetching the invoice"});
    });
}


const getUserInvoices = (req, res) => {
    return Incoice.findAll({ where : {
        userId: req.params.userId, 
    }})
    .then((invoices = []) => {
        return res.status(200).json({invoices,  message: "invoices fetched successfully"});
    }).catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while fetching the invoices"});
    });
}

const getAllInvoices = (req, res) => {
    return Incoice.findAll()
    .then((invoices = []) => {
        return res.status(200).json({invoices,  message: "invoices fetched successfully"});
    }).catch(err => {
        console.error(err);
        return res.status(502).json({message: "error while fetching the invoices"});
    });
}


export {createInvoice, getInvoice, getUserInvoices, getAllInvoices}