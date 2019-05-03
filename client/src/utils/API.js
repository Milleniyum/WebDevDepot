import axios from "axios";

export default {
  getMenuItems: function () {
    return axios.get("/api/menu");
  },
  addMenuItem: function (menuItem) {
    return axios.post("/api/menu", menuItem);
  },
  updateMenuItem: function (menuItem) {
    return axios.put("/api/menu", menuItem)
  },
  deleteMenuItem: function (id, position) {
    return axios.delete("/api/menu", { data: { id: id, position: position } });
  }
};
