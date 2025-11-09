const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
          {description || "Content coming soon..."}
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
