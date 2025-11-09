import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Company Routes */}
          <Route path="company/about" element={<AboutPage />} />
          <Route path="company/team" element={<TeamPage />} />
          <Route path="company/careers" element={<CareersPage />} />
          <Route path="company/contact" element={<ContactPage />} />

          <Route
            path="industries/retail-fmcg"
            element={<PlaceholderPage title="Retail & FMCG" />}
          />
          <Route
            path="industries/hospitality"
            element={<PlaceholderPage title="Hospitality" />}
          />
          <Route
            path="industries/healthcare"
            element={<PlaceholderPage title="HealthCare" />}
          />
          <Route
            path="industries/banking"
            element={<PlaceholderPage title="Banking" />}
          />

          <Route
            path="services/sales-analytics"
            element={<PlaceholderPage title="Sales Analytics" />}
          />
          <Route
            path="services/marketing-analytics"
            element={<PlaceholderPage title="Marketing Analytics" />}
          />
          <Route
            path="services/hr-analytics"
            element={<PlaceholderPage title="HR Analytics" />}
          />
          <Route
            path="services/customer-analytics"
            element={<PlaceholderPage title="Customer Analytics" />}
          />
          <Route
            path="services/supply-chain"
            element={
              <PlaceholderPage title="Supply Chain & Inventory Management" />
            }
          />

          <Route
            path="solutions/kpi"
            element={<PlaceholderPage title="Key Performance Indicators" />}
          />
          <Route
            path="solutions/customer-segregation"
            element={<PlaceholderPage title="Customer Segregation" />}
          />
          <Route
            path="solutions/roi"
            element={<PlaceholderPage title="Return On Investment" />}
          />
          <Route
            path="solutions/competition-analysis"
            element={<PlaceholderPage title="Competition Analysis" />}
          />
          <Route
            path="solutions/forecasting"
            element={<PlaceholderPage title="Forecasting" />}
          />
          <Route
            path="solutions/analytics-everywhere"
            element={<PlaceholderPage title="Analytics Everywhere" />}
          />

          <Route path="aiimage" element={<PlaceholderPage title="AiImage" />} />

          <Route path="biks/bi" element={<PlaceholderPage title="BIKS BI" />} />
          <Route
            path="biks/dashboard"
            element={<PlaceholderPage title="BIKS Dashboard" />}
          />
          <Route
            path="biks/personalized"
            element={<PlaceholderPage title="Personalized BIKS" />}
          />

          <Route
            path="resources/blog"
            element={<PlaceholderPage title="Blog" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
