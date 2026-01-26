const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
// Default recipient: use `TO_EMAIL` in .env to override
const TO_EMAIL = process.env.TO_EMAIL || 'twodyestrada@gmail.com'

let transporter = null
let usingTestAccount = false

async function createTransport() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  }

  // Fallback: create an Ethereal test account so developers can test without SMTP
  const testAccount = await nodemailer.createTestAccount()
  usingTestAccount = true
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  })
}

(async () => {
  transporter = await createTransport()
  app.listen(PORT, () => {
    console.log(`Email server running on http://localhost:${PORT}`)
    if (usingTestAccount) console.log('Using Ethereal test account for email sending (no real emails will be delivered).')
  })
})()

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  if (!transporter) {
    console.error('Transporter not ready')
    return res.status(500).json({ error: 'Server transport not ready' })
  }

  const mailOptions = {
    from: `Portfolio Contact <${process.env.SMTP_USER}>`,
    to: TO_EMAIL,
    subject: `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    const result = { ok: true }
    if (usingTestAccount) {
      const preview = nodemailer.getTestMessageUrl(info)
      if (preview) result.previewUrl = preview
    }
    res.json(result)
  } catch (err) {
    console.error('Error sending mail', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})


