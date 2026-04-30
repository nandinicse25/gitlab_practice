const data = {
  revenue: 245780,
  orders: 1824,
  customers: 973,
  conversionRate: 3.9,
  topProducts: [
    { name: "Wireless Earbuds", unitsSold: 420, revenue: 29400, stock: 83 },
    { name: "Smart Watch", unitsSold: 311, revenue: 49760, stock: 42 },
    { name: "Gaming Mouse", unitsSold: 285, revenue: 17100, stock: 120 },
    { name: "Mechanical Keyboard", unitsSold: 233, revenue: 27960, stock: 58 }
  ],
  recentOrders: [
    { id: "#10481", customer: "Ava Smith", total: 129.99, status: "Shipped" },
    { id: "#10480", customer: "Noah Lee", total: 89.00, status: "Processing" },
    { id: "#10479", customer: "Emma Davis", total: 245.49, status: "Delivered" },
    { id: "#10478", customer: "Liam Brown", total: 59.95, status: "Pending" }
  ]
};

const money = n => `$${n.toLocaleString()}`;

const cards = [
  ["Revenue", money(data.revenue)],
  ["Orders", data.orders.toString()],
  ["Customers", data.customers.toString()],
  ["Conversion", `${data.conversionRate}%`]
];

document.getElementById("summary-cards").innerHTML = cards
  .map(([t, v]) => `<article class="card"><h3>${t}</h3><p>${v}</p></article>`)
  .join("");

document.getElementById("products-body").innerHTML = data.topProducts
  .map(p => `<tr><td>${p.name}</td><td>${p.unitsSold}</td><td>${money(p.revenue)}</td><td>${p.stock}</td></tr>`)
  .join("");

document.getElementById("orders-list").innerHTML = data.recentOrders
  .map(o => `<li><strong>${o.id}</strong> — ${o.customer} — ${money(o.total)} — ${o.status}</li>`)
  .join("");
