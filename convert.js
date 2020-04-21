const sharp = require("sharp")
const glob = require("glob")

const files = glob.sync("./flags/*.svg");
const sizes = [20, 50, 100]

files.forEach(picture => {
  const fileName = picture.split('/').slice(-1)[0].replace('.svg', '.png')
  sizes.forEach(size => {
    const output = `./output/${size}x${size}`

    sharp(picture)
      .resize(size)
      .png()
      .toFile(`${output}/${fileName}`)
  })
});
