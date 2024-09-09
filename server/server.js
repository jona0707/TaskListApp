const app = require('./app');
const sequelize = require('./config/config');
const PORT = process.env.PORT || 5000;

// Sincronizar modelo y BDD
sequelize.sync({ force: false })  // `force: false` no elimina las tablas existentes
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });