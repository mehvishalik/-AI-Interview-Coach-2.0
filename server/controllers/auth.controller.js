import genToken from "../config/token";
import User from "../models/userModel";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });

   
    }
    let token = await genToken(user._id)
    res.cookie( "token" , token , {
        http :true ,
        secure : false ,
        sameSi
    })
   
  } catch (error) {
    console.log(error);
  }
};
