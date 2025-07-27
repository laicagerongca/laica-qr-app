<template>
  <div class="qr-home">
    <h1>Welcome</h1>
    <p>Click the button below to scan a QR code.</p>
    <a href="/scan">
      <button>Scan QR Code</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.qr-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #2779bd;
}
</style>
