import { buildFeedbackPath, extraFeddback } from "./feedback";

function handler(req, res) {
  const id = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extraFeddback(filePath);
  const selectedFeedback = data.find((f) => f.id === id);

  res.status(200).json({
    feedback: selectedFeedback,
  });
}

export default handler;
