for (let i = 0; i < 5; i++) {
  let hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

  let gen = generateHex(hex);
  console.log(gen);
}

function generateHex<T>(hex: T): T {
  return hex;
}
