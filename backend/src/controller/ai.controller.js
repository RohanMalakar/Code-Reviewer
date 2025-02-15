import generateContent from "../Service/ai.service.js";

const getReview = async (req, res) => {
  try {

    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required in the request body" });
    }

    const result = await generateContent({ code, language });

    res.status(200).json(result);

  } catch (error) {
    console.error("Error in getReview:", error.message);
    res.status(500).json({ error: error.message }); 
  }
};

export default getReview;
