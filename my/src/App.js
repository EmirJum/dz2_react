import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  const product = {
    name: "Sport club A-2",
    type: "Sambo",
    media: "Instagramm"
}
  
  return (
      <div>
      App js
      <AboutUs text="Sport club A-2 present" product={product} / >
    </div>
  );
}

export default App;git init