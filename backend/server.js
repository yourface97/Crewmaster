const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

if(process.env.ENV !== 'production'){
    const dotenv = require('dotenv').config();
}

const PORT = process.env.PORT;
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/dsc/units', require('./routes/unitRoutes'));
app.use('/dsc/areas', require('./routes/areaRoutes'));
app.use('/dsc/crews', require('./routes/crewRoutes'));
app.use('/dsc/associates', require('./routes/associateRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));