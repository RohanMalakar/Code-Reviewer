import generateContent from "../Service/ai.service.js";

const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      res.status(400).send("code is required  in the request body");
      return;
    }
    const result = await generateContent(code);
    res.send(result);

  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export default getReview;