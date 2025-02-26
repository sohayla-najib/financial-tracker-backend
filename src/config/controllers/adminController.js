const { Admin } = require ('../../models');

exports.getAdminData = async (req, res) => {
    // Allow only super admin access.
    if (!req.admin.isSuperAdmin) {
        return res.status(403).json({ message: 'Access denied. Super admin only.' });
    }
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching admin data' });
    }
};

