import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register = async(req,res) => {

    

    
    const {name,email,password} = req.body;
    if(!name || !email ||!password){
        throw new BadRequestError('please provide all detais');
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError('email already registered')
    }
    
    const user = await User.create({name,email,password});
        res.status(200).json({user})
        
    
}

const login = async(req,res) => {
    const {email,password}  =req.body;

    if(!email  || !password){
        throw new BadRequestError('Invalid creditials');
    }

    const user = await User.findOne({email}).select('+password')
   if(!user){
    throw new UnAuthenticatedError('Invalid credotiaddnls')

   }
   res.status(StatusCodes.OK).json({ user, location: user.location });

}

const updateUser = async(req,res) => {
   
const {email,name,location} = req.body;
if(!email || !name || !location){
    throw new BadRequestError('pls provide all values');

}
const user = await User.findOne({_id:req.user.userId});
user.email = email;
user.name = name;
user.location = location;

await user.save();
res.status(StatusCodes.OK).json({ user, location: user.location });





}
const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    res.status(StatusCodes.OK).json({ user, location: user.location });
  };

  const logout = async (req, res) => {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
  };
  

export {register,login,updateUser,logout,getCurrentUser};