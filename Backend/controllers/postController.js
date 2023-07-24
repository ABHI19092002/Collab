
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes';




   
const createPost = async(req,res) => {
    
}

const deletePost = async(req,res) => {
    res.send("you delete post")
}
const getAllPost = async(req,res) => {
    res.send("you getAllpost post")
}
const getOnePost = async(req,res) => {
    res.send("you getonepost post")
}


const updatePost = async(req,res) => {
    res.send("you update post")
}

export {createPost,deletePost,getOnePost,getAllPost,updatePost}