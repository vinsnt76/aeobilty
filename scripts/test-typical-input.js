async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/diagnostic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://aeobility.com.au/', intent: 'solar installers Perth' })
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);
  } catch (e) {
    console.error(e);
  }
}
test();
