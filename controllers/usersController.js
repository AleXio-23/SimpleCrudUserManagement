const { restart } = require('nodemon');
const User = require('../models/user');

exports.getUsers = async (req, res, next) => {

    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }

}


exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

exports.deleteuser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false
        });
    }
}

exports.banUser = async (req, res, next) => {
    const update = { isBanned: true };
    try {
        const user = await User.findByIdAndUpdate(req.params.id, update, {
            new: true,
            runValidators: true
        });

        if (!user) {
            res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}