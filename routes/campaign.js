const express = require('express');
const Campaign = require('../models/Campaign');

const router = express.Router();

// Create a new campaign
router.post('/', async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    res.status(200).send(campaigns);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a campaign
router.put('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(campaign);
  } catch (error) {
    res.status(400).json({ message: 'Error updating campaign' });
  }
});


// Delete a campaign
router.delete('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) {
      return res.status(404).send();
    }
    res.status(200).send(campaign);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
