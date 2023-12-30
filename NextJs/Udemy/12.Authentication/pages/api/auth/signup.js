import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "./auth";

async function handler(req, res) {
  if (req.method !== "POST") return;

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 3
  ) {
    res.status(422).json({ message: "Invalid input" });
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db
    .collection("users")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists" });
    client.close()
    return;
  }
  const hashedPassword = await hashPassword(password);

  const result = db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created!" });
  client.close()
}

export default handler;