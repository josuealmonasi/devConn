const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// Load Post model
const Post = require('../../models/Post');
// Load validation
const validatePostInput = require('../../validation/post');

// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get('/test', (req, res) => {
  res.json({
    msg: 'Posts Works'
  });
});

// @route   POST api/posts/
// @desc    Create post
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });
    // Save post
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
