Quantum Inventory Pro
Quantum Inventory Pro is a high-performance, enterprise-grade admin dashboard designed for seamless inventory management. Built with React 19 and TypeScript, this project implements modern architectural patterns, focusing on scalability, type safety, and a premium user experience.

✨ Key Features
🔐 Authentication Flow: Secure login/logout system (Mocked) with protected routing.

📦 Inventory Management: Full CRUD operations for products with real-time UI updates.

⚡ Data Synchronization: Efficient server-state management using TanStack Query (v5).

🎨 Enterprise UI: Polished interface powered by Ant Design (v5).

🏗️ Feature-Based Architecture: Modular folder structure for better maintainability.

🛡️ Strict Type Safety: 100% TypeScript coverage for predictable and bug-free development.

🗄️ Global State: Lightweight and persistent state management using Zustand.

Project Structure
The project follows a Feature-based architecture to ensure high modularity:

src/
├── api/             # Global Axios configuration & interceptors
├── components/      # Shared atomic components (Buttons, Loaders, etc.)
├── features/        # Business logic divided by modules
│   ├── auth/        # Login, Logout, and User Session
│   ├── inventory/   # Product list, Create, Edit, Delete
│   └── dashboard/   # Analytics & Overview
├── hooks/           # Custom global React hooks
├── layouts/         # Shared page wrappers (MainLayout, AuthLayout)
├── routes/          # Centralized route configuration
├── store/           # Global state (Zustand)
└── types/           # Global TypeScript definitions

Getting Started
Prerequisites
Node.js: v18.0.0 or higher

npm or yarn

Installation
1. Clone the repository:
   git clone https://github.com/your-username/Quantum-Inventory-Pro.git

2. Navigate to the project directory:
   cd Quantum-Inventory-Pro

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev
