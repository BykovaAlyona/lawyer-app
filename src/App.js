import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/HeaderComponent";
import Footer from "./component/FooterComponent";
import Nav from "./component/NavComponent";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import PracticePage from "./pages/PracticePage";
import { services } from "./const/services";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="App">
        <Routes>
          <Route path="/" element={<MainPage />}
          />
          {services.map((service) =>
            <Route path={"/services/" + service.id + ""}
              element={service.nameelement}
              key={'route_' + service.id}
            />
          )}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={
            <p id="notfound">
              <h1>Ошибка 404</h1>
              <h2>Здесь ничего нет!</h2>
            </p>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


