const Waitlist = require('../models/Waitlist');

// @desc    Join waitlist
// @route   POST /api/waitlist/join
// @access  Public
exports.joinWaitlist = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email' });
    }

    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({ success: false, message: 'Email is already on the waitlist' });
    }

    const waitlistEntry = await Waitlist.create({ email });

    res.status(201).json({
      success: true,
      data: waitlistEntry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
