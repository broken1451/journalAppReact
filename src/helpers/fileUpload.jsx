import React from "react";

const fileUpload = async (file) => {
  const urlCloudinary = "https://api.cloudinary.com/v1_1/dbvuiwsrr/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(urlCloudinary, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export default fileUpload;
