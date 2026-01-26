const nodemailer = require('nodemailer')

async function main(){
  const testAccount = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass }
  })

  const info = await transporter.sendMail({
    from: 'Test <test@example.com>',
    to: 'recipient@example.com',
    subject: 'Ethereal test',
    text: 'Hello from test-send script',
    html: '<p>Hello from <b>test-send</b> script</p>'
  })

  console.log('Message sent. Preview URL:', nodemailer.getTestMessageUrl(info))
}

main().catch(err=>{
  console.error(err)
  process.exit(1)
})
