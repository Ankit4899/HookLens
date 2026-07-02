import api from "../api/axios";

export const createEndpoint = async (data) => {
  return await api.post("/endpoints", data);
};

export const getEndpoints = async () => {
  return await api.get("/endpoints");
};

export const deleteEndpoint = async (id) => {
  return await api.delete(`/endpoints/${id}`);
};

export const toggleEndpoint = async (id) => {
  return await api.patch(`/endpoints/${id}`);
};