const config = {
	API_KEY: process.env.API_KEY || 'default-api-key',
	DB_HOST: process.env.DB_HOST || 'localhost',
	PORT: process.env.PORT || 3000,
	line1style : {
		x1: 70, // New y-coordinate for point 1
		y1: 1000,
		x2: 0,
		y2 : 1100 // New y-coordinate for point 2
	},
	line2style : {
		x1 : 20,
		y1 : 1000,
		x2 : 0,
		y2 : 1100
	},
	line3style : {
		x1 : 1420,
		x2 : 1420,
		y1 : 1000,
		y2 : 1100
	},
	line4style : {
		x1 : 0,
		x2 : 100,
		y1 : 100,
		y2 : 100,
	},
	line5style : {
		x1 : 0,
		x2 : 100,
		y1 : 400,
		y2 : 400,
	}
  };
  
  export default config;