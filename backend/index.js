
const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});



setTimeout(() => {
	const { Users } = require("./src/db.js");

var superAdmin = Users.findOrCreate({
	where: {
		email: "Milagrosdiezbarrantes@gmail.com",
		password: 'mili123',
		name: "Milagros Berrantes",
		nickname: "La-Mili",
		role: "ROLE_SUPER_ADMIN",
	},
});
var superAdmin2 = Users.findOrCreate({
	where: {
		email: "281212.namaste@gmail.com",
		password: 'alex123',
		name: "Alex Wolf",
		nickname: "The-Machine",
		role: "ROLE_SUPER_ADMIN",
	},
});


Promise.all( [superAdmin,superAdmin2])
	.then((res) => {
		console.log([superAdmin,superAdmin2]);
	});
},5000)
