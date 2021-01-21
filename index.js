const express = require('express');

// crear servidor express
const app = express();

// rutas
app.get('/', (req, res) =>{
  console.log('se recibio una peticion en /');
  res.json({
      ok:true,
      msg:"Recibido",
  });
}
);

// config
app.listen(4000, () => {
    console.log('backend corriendo en el puerto ${4000}');
})