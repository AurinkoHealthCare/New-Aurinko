// utils/translate.js
import axios from "axios";

export const translateText = async (text, targetLang) => {
  try {
    const res = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "en",
      target: targetLang,
      format: "text"
    }, {
      headers: { accept: "application/json" }
    });

    return res.data.translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return text;
  }
};
