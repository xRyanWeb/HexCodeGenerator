export const HexString = () => {
  for (let i = 0; i < 5; i++) {
    let hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    // hex += "#" ;
    console.log(hex);
  }
};

HexString();
