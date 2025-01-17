import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import Newsletter from './pages/Newsletter/Newsletter';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';
import Resources from './pages/Resources/Resources';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import Login from './pages/Login/Login';





export default function App() {
  return (
    <Router>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <div className="min-h-screen text-foreground">
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
