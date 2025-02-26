const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Admin } = require ('../../models');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ where: { username } });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin.id, isSuperAdmin: admin.isSuperAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
