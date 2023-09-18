import { buildFeedbackPath, extractFeedback } from "./feedback";

export default function handler(req: any, res: any) {
    const feedbackId = req.query.feedbackId;
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback(filePath);

    const selectedFeedback = feedbackData.find((feedback: any) => feedback.id === feedbackId);

    res.status(200).json({ feedback: selectedFeedback });
}