// components/LoadingSpinner.jsx
const LoadingSpinner = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        flexDirection: 'column'
      }}
      aria-live="polite"
      aria-busy="true"
      role="status"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Hidden SEO content for crawlers */}
      <meta itemProp="name" content="Naksh Unisex Salon Sikar" />
      <meta itemProp="description" content="Loading best salon services in Sikar - haircuts, bridal makeup, facial, spa & beauty treatments" />
      
      <div 
        style={{
          width: '50px',
          height: '50px',
          border: '5px solid #f3f3f3',
          borderTop: '5px solid #D4AF37',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
        aria-label="Loading indicator"
      ></div>
      
      <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
        Loading Naksh Salon - Best Salon in Sikar...
      </p>
      
      {/* Hidden content for SEO during loading */}
      <div style={{ display: 'none' }}>
        <h1>Naksh Unisex Salon Sikar</h1>
        <p>Best salon in Sikar for haircuts, bridal makeup, facial, spa and beauty services.</p>
        <p>Address: Sikar, Rajasthan | Phone: +91-8690900970</p>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;