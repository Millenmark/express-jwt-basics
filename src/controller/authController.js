import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    res.status(400).json({ message: "Username and Password are required" });

  const id = new Date().getTime();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "User logged in", accessToken: token });
};

export const dashboard = async (req, res) => {
  const { id, username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    message: `Hello, ${username}`,
    secret: `Here is your lucky number ${luckyNumber}`,
  });
};
