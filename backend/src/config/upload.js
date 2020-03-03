const multer = require('multer');
const path = require('path');

module.exports = {
  // salva no disco(arquivos fisicos da aplicação)
  storage: multer.diskStorage({
    // resolve : informa a pasta a ser guardada
    // desse modo, a '/' não é necessária, tornando o código multiplataforma

    destination: path.resolve(__dirname, '..', '..', 'uploads'),

    // call back é chamada assim que o nome do arquivo é montado
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      const name = path.basename(file.originalname, ext)

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),

};