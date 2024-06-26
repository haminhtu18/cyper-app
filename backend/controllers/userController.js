const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be up to 6 characters");
  }

  // Check if user email already exists
  let userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    console.log("Email nay da ton tai");
    throw new Error("Email has already been registered");
  }

  let user = {
    name,
    email,
    password,
  };

  // const tokenActiveAccount = generateToken(user);
  // const activationUrl = `http:localhost:5173/activation/${tokenActiveAccount}`;
  // const subject = "Active your account";
  // const message = `Hello ${user.name}, ấn vào đường dẫn để kích hoạt tài khoản của bạn: ${activationUrl} `;
  // const send_to = user.email;

  // try {
  //   await sendEmail({ subject: subject, message: message, send_to: send_to });
  //   res
  //     .status(200)
  //     .json({ success: true, message: `Kiểm tra hòm thư của bạn: ${send_to}` });
  // } catch (error) {
  //   res.status(500);
  //   res.json({ error: error.message });
  //   console.log(error.message, "Email not sent, please try again");
  // }

  // Create new user
  user = await User.create({
    name,
    email,
    password,
  });

  // //   Generate Token
  // const token = generateToken(user._id);

  // // Send HTTP-only cookie
  // res.cookie("token", token, {
  //   path: "/",
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 1000 * 86400), // 1 day
  //   sameSite: "none",
  //   secure: true,
  // });

  if (user) {
    const { _id, name, email, photo, phone, role, address } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      phone,
      role,
      address,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate Request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  // Check if user exists
  const userEmail = await User.findOne({ email });

  if (!userEmail) {
    res.status(400);
    throw new Error("Sai email vui long nhap lai");
  }

  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, userEmail.password);

  //   Generate Token
  const token = generateToken(userEmail._id);

  if (passwordIsCorrect) {
    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
  }
  if (userEmail && passwordIsCorrect) {
    const { _id, name, email, photo, phone, address, role } = userEmail;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      address,
      phone,
      role,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// Logout User
const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now()),
    sameSite: "none",
    secure: true,
  });
  return res.status(201).json({ message: "Successfully Logged Out" });
});

// Get User Data
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo, phone, role, addresses } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      role,
      addresses,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, photo, phone, address, role } = user;
    user.email = email;
    user.name = req.body.name || name;
    user.phone = req.body.phone || phone;
    user.photo = req.body.photo || photo;
    user.address = req.body.address || address;
    user.role = req.body.role || role;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      photo: updatedUser.photo,
      phone: updatedUser.phone,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//Add Address User
const adddAddressUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const newAddress = req.body;
  console.log(req.body);
  const sameTypeAddress = user.addresses.find(
    (address) => address.addressType === req.body.addressType
  );
  if (sameTypeAddress) {
    res.status(400);
    throw new Error("Address none found");
  }
  const existAddress = user.addresses.find(
    (address) => address._id === req.body._id
  );
  if (existAddress) {
    Object.assign(existAddress, req.body);
  } else {
    user.addresses.push(req.body);
  }

  await user.save();
  res.status(200).json(user);
});

//Update Address User
const updateAddressUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const sameTypeAddress = user.addresses.find(
    (address) => address.addressType === req.body.addressType
  );
  if (sameTypeAddress) {
    res.status(400);
    throw new Error("Address none found");
  }
  const existAddress = user.addresses.find(
    (address) => address._id === req.body._id
  );
  if (existAddress) {
    Object.assign(existAddress, req.body);
  } else {
    user.addresses.push(req.body);
  }

  await user.save();
  res.status(200).json(user);
});

//Delete Address User
const deleteAddressUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  const sameTypeAddress = user.addresses.find(
    (address) => address.addressType === req.body.addressType
  );
  if (sameTypeAddress) {
    res.status(400);
    throw new Error("Address none found");
  }
  const existAddress = user.addresses.find(
    (address) => address._id === req.body._id
  );
  if (existAddress) {
    Object.assign(existAddress, req.body);
  } else {
    user.addresses.slice(req.body);
  }

  await user.save();
  res.status(200).json(user);
});

//Change Password User
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { oldPassword, password } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }
  //Validate
  if (!oldPassword || !password) {
    res.status(400);
    throw new Error("Please add old and new password");
  }

  // check if old password matches password in DB
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  // Save new password
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res.status(200).send("Password change successful");
  } else {
    res.status(400);
    throw new Error("Old password is incorrect");
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  // Delete token if it exists in DB
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  // Create Reste Token
  let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
  console.log(resetToken);

  // Hash token before saving to DB
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Save Token to DB
  await new Token({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000), // Thirty minutes
  }).save();

  //Construct Reset Url
  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // Reset Email
  const message = `
      <h2>Hello ${user.name}</h2>
      <p>Please use the url below to reset your password</p>
      <p>This reset link is valid for only 30minutes.</p>

      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>

      <p>Regards...</p>
      <p>Pinvent Team</p>
    `;
  const subject = "Password Reset Request";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Reset Email Sent" });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

// Reset Password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  // Hash token, then compare to Token in DB
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // fIND tOKEN in DB
  const userToken = await Token.findOne({
    token: hashedToken,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new Error("Invalid or Expired Token");
  }

  // Find user
  const user = await User.findOne({ _id: userToken.userId });
  user.password = password;
  await user.save();
  res.status(200).json({
    message: "Password Reset Successful, Please Login",
  });
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  adddAddressUser,
  updateAddressUser,
  deleteAddressUser,
  changePassword,
  forgotPassword,
  resetPassword,
};
