import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Data Science & ML Startup</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Professional setup complete. Ready for development.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
