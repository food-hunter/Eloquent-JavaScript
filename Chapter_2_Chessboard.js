const size = 8;
for (let count = 0; count <= size; count++) {
  const isEven = (count % 2 === 0)
  if (isEven) {
    console.log("# # # #")
  } else {
    console.log(" # # # #")
  }
}