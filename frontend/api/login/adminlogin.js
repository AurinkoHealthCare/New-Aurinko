import axiosInstance from "../baseurl";

export const loginAdmin = async (data) => {
  const res = await axiosInstance.post("/admin/login", data);
  return res.data;
};
