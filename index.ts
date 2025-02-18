const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;
const DATA_FILE = "db.json";

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

// Hàm đọc dữ liệu từ file JSON
const readData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return { orders: [] };
  }
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data from file:", err);
    return { orders: [] };
  }
};

// Hàm ghi dữ liệu vào file JSON
const writeData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing data to file:", err);
  }
};

// Lấy danh sách đơn hàng
app.get("/orders", (req, res) => {
  const data = readData();
  res.json(data.orders);
});

// Thêm đơn hàng mới
app.post("/orders", (req, res) => {
  const data = readData();
  const { customer, phone, items, status } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Đơn hàng phải có ít nhất một món nước" });
  }

  // Lấy ID lớn nhất rồi +1 (tránh trùng ID khi có xóa đơn hàng)
  const maxId = data.orders.length > 0 ? Math.max(...data.orders.map((order) => order.id)) : 0;
  const newOrder = {
    id: maxId + 1,
    customer: customer || "",
    phone: phone || "",
    items,
    time: new Date().toISOString(),
    status: status || "pending", // Mặc định trạng thái "pending"
  };

  data.orders.push(newOrder);
  writeData(data);

  res.status(201).json({ message: "Order added successfully", order: newOrder });
});

// Cập nhật trạng thái đơn hàng
app.patch("/orders/:id", (req, res) => {
  const data = readData();
  const orderId = Number(req.params.id); // Ép kiểu về số
  const { status } = req.body;

  if (!["pending", "finished", "canceled"].includes(status)) {
    return res.status(400).json({ message: "Trạng thái không hợp lệ" });
  }

  const orderIndex = data.orders.findIndex((order) => order.id === orderId);
  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  data.orders[orderIndex].status = status;
  writeData(data);

  res.json({ message: "Order updated successfully", order: data.orders[orderIndex] });
});

// Xóa đơn hàng
app.delete("/orders/:id", (req, res) => {
  const data = readData();
  const orderId = Number(req.params.id);

  const orderIndex = data.orders.findIndex((order) => order.id === orderId);
  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  data.orders.splice(orderIndex, 1);
  writeData(data);

  res.json({ message: "Order deleted successfully" });
});

// Chạy server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
