# CertiChain Frontend

A professional Web3 certificate verification system built with React, Vite, and Tailwind CSS. This project provides the complete UI structure and routing for issuing, verifying, and managing blockchain-backed certificates on Polygon.

## 🏗️ Project Structure

```
src/
├── routes/
│   └── AppRoutes.jsx          # React Router v6 main routes
├── layouts/
│   ├── StudentLayout.jsx      # Student dashboard wrapper with sidebar
│   ├── InstituteLayout.jsx    # Institute console wrapper with sidebar
│   └── AdminLayout.jsx        # Admin panel wrapper with sidebar
├── components/
│   ├── Navbar.jsx             # Header navigation (reusable)
│   ├── Footer.jsx             # Footer (reusable)
│   ├── Sidebar.jsx            # Role-based sidebar (reusable)
│   ├── Card.jsx               # Card container component (reusable)
│   └── Table.jsx              # Data table component (reusable)
├── pages/
│   ├── Home/
│   │   └── Homepage.jsx       # Public landing page
│   ├── Auth/
│   │   ├── Login.jsx          # Multi-role login page
│   │   └── Signup.jsx         # Student/Institute signup page
│   ├── Verify/
│   │   └── VerifyPage.jsx     # Public certificate verification
│   ├── Student/
│   │   ├── StudentDashboard.jsx
│   │   └── StudentPortfolio.jsx
│   ├── Institute/
│   │   ├── InstituteDashboard.jsx
│   │   ├── IssueCertificate.jsx
│   │   ├── BulkIssue.jsx
│   │   ├── History.jsx
│   │   └── Wallet.jsx
│   └── Admin/
│       ├── AdminLogin.jsx
│       ├── AdminDashboard.jsx
│       ├── AdminApprovals.jsx
│       └── AdminInstitutes.jsx
├── styles/
│   └── index.css              # Tailwind CSS imports
├── App.jsx                    # Main app wrapper
└── main.jsx                   # Vite entry point
```

## 🛣️ Route Map

| Route | Component | Auth | Role |
|-------|-----------|------|------|
| `/` | Homepage | No | Public |
| `/login` | Login | No | Public |
| `/signup` | Signup | No | Public |
| `/verify` | VerifyPage | No | Public |
| `/admin/login` | AdminLogin | No | Public |
| `/admin/dashboard` | AdminDashboard | Yes | Admin |
| `/admin/approvals` | AdminApprovals | Yes | Admin |
| `/admin/institutes` | AdminInstitutes | Yes | Admin |
| `/student/dashboard` | StudentDashboard | Yes | Student |
| `/student/:id` | StudentPortfolio | No | Public |
| `/institute/dashboard` | InstituteDashboard | Yes | Institute |
| `/institute/issue` | IssueCertificate | Yes | Institute |
| `/institute/bulk-issue` | BulkIssue | Yes | Institute |
| `/institute/history` | History | Yes | Institute |
| `/institute/wallet` | Wallet | Yes | Institute |

## 🎨 UI Structure

All components have been created with **minimal placeholder content**. Each file contains:
- Basic JSX component structure
- Comments indicating where UI should be built
- Proper imports and exports
- Ready for your custom theme implementation

**Example component structure:**
```jsx
export default function Dashboard() {
  return (
    <div className="">
      {/* Stats cards section */}
      {/* Main content area */}
      {/* Action buttons */}
    </div>
  )
}
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts Vite dev server at `http://localhost:5173/`

### Production Build

```bash
npm run build
```

Builds optimized production bundle to `dist/`

## 🔌 Backend Integration

This frontend is designed to work with the CertiChain backend API. The API documentation is available in `README-backend.md`.

### API Base URL
```
http://localhost:3001/api
```

### Quick Setup Steps

1. **Create API client** (recommended: axios with interceptors)
   ```javascript
   // src/api/client.js
   import axios from 'axios'
   
   const api = axios.create({
     baseURL: 'http://localhost:3001/api'
   })
   
   // Auto-attach JWT token to requests
   api.interceptors.request.use((config) => {
     const token = localStorage.getItem('token')
     if (token) {
       config.headers.Authorization = `Bearer ${token}`
     }
     return config
   })
   
   export default api
   ```

2. **Update page components** to call API endpoints
   - Replace mock data with real API calls
   - Handle authentication and token storage
   - Add loading and error states

3. **Key integration points:**
   - **Auth**: Login, Signup → `/api/auth/student/login`, `/api/auth/student/register`, `/api/university/login`
   - **Student**: Dashboard, Certificates → `/api/student/dashboard`, `/api/student/certificates`
   - **Institute**: Issuance, History → `/api/university/certificate/issue`, `/api/university/certificates`
   - **Admin**: Approvals, Statistics → `/api/admin/institutes/pending`, `/api/admin/dashboard`
   - **Public**: Certificate Verification → `/api/verify/certificate/:id`

## 🎨 Customizing Your Theme

### 1. Colors & Tailwind Config

Edit `tailwind.config.js` to customize color palette:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // ... more colors
      }
    }
  }
}
```

### 2. Typography

Update font family in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
      // ... more fonts
    }
  }
}
```

### 3. Component Styling

Add styles directly in component JSX using Tailwind utilities. Example:
```jsx
export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Your content */}
    </div>
  )
}
```

## 📦 Key Dependencies

- **React 19** - UI library
- **React Router v6** - Client-side routing
- **Vite 7** - Build tool & dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code quality

Install additional dependencies as needed:
```bash
npm install axios  # For API calls
npm install react-hook-form  # For form handling
npm install zustand  # For state management (optional)
```

## 🔄 State Management (Recommended)

For managing authentication and global state, consider adding:

### Option 1: Context API (Built-in)
```jsx
// src/context/AuthContext.jsx
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  
  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
```

### Option 2: Zustand (Recommended)
```bash
npm install zustand
```

```javascript
// src/store/authStore.js
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  login: (userData, token) => set({ user: userData, token }),
  logout: () => set({ user: null, token: null })
}))
```

## 🔐 Authentication Flow

1. **User visits** `/login` or `/signup`
2. **Selects role** (Student, Institute, or Admin)
3. **Submits credentials** to backend
4. **Token stored** in localStorage
5. **Redirected** to role-specific dashboard
6. **Token auto-attached** to all subsequent API requests

Example login implementation:
```jsx
async function handleLogin(email, password, role) {
  const endpoint = role === 'Admin' 
    ? '/admin/login' 
    : `/${role.toLowerCase()}/login`
  
  const response = await api.post(endpoint, { email, password })
  localStorage.setItem('token', response.data.token)
  navigate(`/${role.toLowerCase()}/dashboard`)
}
```

## 📝 Component Props Reference

### Sidebar
```jsx
<Sidebar 
  items={[
    { label: 'Dashboard', to: '/student/dashboard' },
    { label: 'Portfolio', to: '/student/12345', badge: 'New' }
  ]}
  title="Student"
/>
```

### Card
```jsx
<Card 
  title="My Certificates"
  action={<button>View All</button>}
>
  {/* Content */}
</Card>
```

### Table
```jsx
<Table
  columns={[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' }
  ]}
  data={[
    { id: '1', name: 'John' }
  ]}
  emptyText="No data"
/>
```

## 🛠️ Development Tips

1. **Use Tailwind Docs** - Reference for all utility classes: https://tailwindcss.com/docs
2. **Component Testing** - Test components in isolation before integrating API
3. **Console Logs** - Debug API responses and state changes
4. **Responsive Design** - Test on mobile using `npm run dev`
5. **Hot Reload** - Vite auto-refreshes on file changes

## 📚 File Conventions

- **Pages**: One component per file, named with PascalCase
- **Components**: Reusable UI blocks, kept simple
- **Layouts**: Role-based wrappers with `<Outlet />`
- **Imports**: Always use relative paths from workspace root

## 🚨 Common Integration Issues

| Issue | Solution |
|-------|----------|
| CORS errors | Ensure backend runs on `http://localhost:3001` |
| Token not sent | Check localStorage key and interceptor setup |
| Routes not working | Verify `<BrowserRouter>` in `main.jsx` |
| Tailwind not applied | Check `src/styles/index.css` imports |
| API 404 errors | Verify endpoint URL matches backend documentation |

## 📖 Backend API Documentation

Full API specs available in `README-backend.md`. Includes:
- Student endpoints
- University/Institute endpoints
- Admin endpoints
- Public verification endpoints
- File upload handling
- Error handling & codes
- Example implementations

## 🎯 Next Steps

1. ✅ File structure & routing complete
2. ⬜ Build UI with your custom theme
3. ⬜ Integrate backend API endpoints
4. ⬜ Add form validation
5. ⬜ Implement state management
6. ⬜ Add error handling & loading states
7. ⬜ Test all user flows
8. ⬜ Deploy to production

## 📞 Support

For detailed API documentation: See `README-backend.md`  
For Tailwind CSS: https://tailwindcss.com/docs  
For React Router: https://reactrouter.com/docs

---

**Ready to build?** Start by implementing your theme in the component files, then wire up the backend API calls!
