import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extraFeddback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data
}

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    const filePath = buildFeedbackPath()
    const data = extraFeddback(filePath)
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath()
    const data = extraFeddback(filePath)
    res.status(200).json({ feedback: data });
  }
}

export default handler;