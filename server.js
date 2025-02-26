require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./src/config/database');

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const incomeRoutes = require('./src/routes/incomeRoutes');
const expenseRoutes = require('./src/routes/expenseRoutes');
const profitGoalRoutes = require('./src/routes/profitGoalRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Optionally add helmet, cors, and morgan for security and logging
// const helmet = require('helmet');
// const cors = require('cors');
// const morgan = require('morgan');
// app.use(helmet());
// app.use(cors());
// app.use(morgan('combined'));

// Route configuration
app.use('/auth', authRoutes);
app.use('/home', homeRoutes);
app.use('/incomes', incomeRoutes);
app.use('/expenses', expenseRoutes);
app.use('/profit-goals', profitGoalRoutes);
app.use('/admin', adminRoutes);

// Basic health check endpoint
app.get('/', (req, res) => {
    res.send('Financial Tracker Backend (backend1-finteck) is running!');
});

// Sync the database and start the server
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully.');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

