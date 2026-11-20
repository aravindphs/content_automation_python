const appDemo = require('./src/app');
const sequelize = require('./src/config/database');

require('./src/models/student.model');
require('./src/models/user.model');

const PORT = process.env.PORT || 8080;

async function start(){
  try{
    await sequelize.authenticate();
  console.log("Database connected succesfully") ;

  await sequelize.sync();
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);

    })
} catch(error) {
  console.error("Unable to start server")
}
}

start();