import axios from "axios";
export const uploadImageToImgBB = async (file: File) => {
  const IMG_BB_API_KEY = "ded6e53d2454cecadd8843b400938b0b";
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${IMG_BB_API_KEY}`,
      formData
    );
    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw error;
  }
};
