// const express=require('express');

const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({ msg: error.errors.name.message })
    }

}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({task});

    } catch (error) {
        res.status(500).send({
            msg: error.errors.name.message
        });
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskId}` });
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ msg: `error :${error}` });
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true, runValidators: true

        });
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskId}` });
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ msg: `error :${error}` });
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskId}` });
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ msg: `error :${error}` });
    }
}
const editTask= async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true, 
            runValidators: true,
            overwrite:true,

        });
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskId}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: `error :${error}` });
    }
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}