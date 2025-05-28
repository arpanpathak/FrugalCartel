# 🛒 FrugalCartel

**FrugalCartel** is a modern .NET + React-based price intelligence platform designed to solve a uniquely American retail problem:

> There’s no concept of a fixed **MRP (Maximum Retail Price)** in the USA — and prices for the same grocery item can vary wildly across stores, locations, and platforms.

FrugalCartel helps consumers **search, filter, and compare** prices of grocery items from multiple sources in real-time — all with a clean modular backend and decoupled frontend architecture.

---

## 🚨 Why This Project?

In countries like India, every product comes with an **MRP** printed on it, preventing retailers from overcharging.  
But in the USA:

- There’s **no standardized MRP**
- Prices vary by **location, store, app, and time**
- Promotions, taxes, and markups are often **opaque**
- Customers **overpay without even realizing it**

FrugalCartel aims to bring transparency, accountability, and savings to your weekly grocery run.

---

## 🧠 Features

- 🔍 Search for grocery items by keyword
- 🛒 Filter by store name (e.g., Walmart, Costco, Safeway)
- 💲 Compare prices across stores
- 🧩 Clean modular architecture using .NET and React
- 🔧 Ready for extensions: alerts, price history, or coupon integration
- 🔐 API-first design with Swagger docs for easy testing

---

## ⚙️ Tech Stack

| Layer        | Tech                                           |
|--------------|------------------------------------------------|
| Backend      | .NET 8 (ASP.NET Core Web API, Modular Design) |
| Frontend     | React (Vite + Tailwind CSS)                   |
| API Testing  | Swagger (OpenAPI), Postman, curl              |
| Data Format  | JSON (RESTful APIs)                           |
| Dev Workflow | GitHub Monorepo + Git Submodules              |
| Container    | Docker (optional for deployment)              |

---

## 🏗️ Project Structure

```

FrugalCartel/
├── backend/                      # .NET 8 Modular Web API
│   ├── FrugalCartel.API/        # Main API host project
│   ├── FrugalCartel.Core/       # Domain models & interfaces
│   ├── FrugalCartel.Infrastructure/ # Data access, scraping, or external APIs
│   └── FrugalCartel.Application/   # Business logic and use-cases
│
├── frontend/                    # React (Vite + Tailwind)
│   └── frugal-ui/              # Decoupled web frontend
│
├── docs/                        # Architecture docs, API specs
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) or `curl` for API testing

---

### 🔧 Backend Setup

```bash
cd backend/FrugalCartel.API
dotnet run
````

The API will be available at:
📍 `http://localhost:5228`

Swagger Docs:
📖 `http://localhost:5228/swagger`

---

### 💻 Frontend Setup

```bash
cd frontend/frugal-ui
npm install
npm run dev
```

React app will run at:
📍 `http://localhost:5173`

---

### 🧪 Test the API with curl

```bash
curl "http://localhost:5228/api/GrocorySearch/search?query=milk&store=costco"
```

---

## 💡 Planned Features

* [ ] Real-time price tracking with scraping/bots
* [ ] Price alerts (SMS/Email)
* [ ] Historical price graphs
* [ ] Shopping list with optimal store selection
* [ ] AI-powered receipt scanner

---

## 🤝 Contributing

Want to improve grocery fairness in America? Start here:

```bash
git clone --recurse-submodules https://github.com/yourname/FrugalCartel.git
```

Please see [`CONTRIBUTING.md`](./docs/CONTRIBUTING.md) for guidelines on code style, pull requests, and module organization.

---

## 📜 License

MIT © 2025 FrugalCartel Team

---

## 💬 A Final Thought

> "In a land of freedom, why isn’t price one of them?"

FrugalCartel believes price transparency is a right — not a privilege.

---