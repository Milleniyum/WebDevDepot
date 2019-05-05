import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },

  //Menu Items
  getMenuItems: function () {
    return axios.get("/api/menu");
  },
  addMenuItem: function (menuItem) {
    return axios.post("/api/menu", menuItem);
  },
  updateMenuItem: function (menuItem) {
    return axios.put("/api/menu", menuItem)
  },
  deleteMenuItem: function (menuItem) {
    return axios.delete("/api/menu", { data: menuItem });
  },

  //Resources
  getResources: function (id) {
    if (id) return axios.get("/api/resource/" + id);
    return axios.get("/api/resource/noid");
  },
  addResource: function (resource) {
    return axios.post("/api/resource", resource);
  },
  updateResource: function (resource) {
    return axios.put("/api/resource", resource);
  },
  deleteResource: function (id) {
    return axios.delete("/api/resource", { data: id });
  }
};
