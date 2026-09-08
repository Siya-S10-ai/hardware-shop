import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout.jsx'
import { AdminLayout } from './components/layout/AdminLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { CatalogPage } from './pages/CatalogPage.jsx'
import { CategoriesPage } from './pages/CategoriesPage.jsx'
import { CategoryPage } from './pages/CategoryPage.jsx'
import { ProductDetailsPage } from './pages/ProductDetailsPage.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { AccountPage } from './pages/AccountPage.jsx'
import { SharedLinkPage } from './pages/SharedLinkPage.jsx'
import { AdminHomePage } from './pages/AdminHomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<CatalogPage />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/shared" element={<SharedLinkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
