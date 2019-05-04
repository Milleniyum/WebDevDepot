import axios from "axios";

export default {
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
  getResources: function () {
    return axios.get("/api/resource");
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
