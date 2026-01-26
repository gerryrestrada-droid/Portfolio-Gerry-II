(async () => {
  try {
    const res = await fetch('http://localhost:4000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Automated Test', email: 'test@example.com', message: 'Hello from automated test' })
    })
    const body = await res.text()
    console.log('STATUS', res.status)
    try { console.log('BODY', JSON.parse(body)) } catch { console.log('BODY', body) }
  } catch (err) {
    console.error('ERROR', err)
    process.exit(1)
  }
})()
