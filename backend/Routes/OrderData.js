const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
    try {
        const { email, order_data, order_date } = req.body

        if (!email || !order_data || !order_date) {
            throw new Error('Missing required fields')
        }

        const data = [{ Order_date: order_date }, ...order_data]

        let eId = await Order.findOne({ email })
        if (!eId) {
            await Order.create({ email, order_data: [data] })
            res.json({ success: true })
        } else {
            await Order.findOneAndUpdate({ email }, { $push: { order_data: data } })
            res.json({ success: true })
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }
})

router.post('/myOrderData', async (req, res) => {
    try {
        const { email } = req.body

        if (!email) {
            throw new Error('Missing email field')
        }

        const myData = await Order.findOne({ email })

        if (!myData) {
            throw new Error('No order data found for the provided email')
        }

        const formattedData = myData.order_data.map((data) => ({
            order_date: data[0].Order_date,
            order_items: data.slice(1),
        }))

        res.json({ orderData: formattedData })
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
    }
})


module.exports = router
