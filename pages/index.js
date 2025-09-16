// pages/index.js
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#0b76ff' }}>SnagTheDeal</h1>
        <nav>
          <a href="/" style={{ marginRight: 12 }}>Home</a>
          <a href="/blog" style={{ marginRight: 12 }}>Blog</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', margin: '30px 0' }}>
        <h2 style={{ fontSize: 36 }}>Find the Best Online Deals Daily!</h2>
        <p style={{ color: '#555', maxWidth: 720, margin: '8px auto' }}>
          Curated deals and honest reviews — click a deal to see the offer (opens in a new tab).
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {/* Card 1 */}
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <div style={{ height: 160, background: '#f4f4f4', borderRadius: 6, marginBottom: 12, display:'flex',alignItems:'center',justifyContent:'center' }}>
            <strong>Product Image</strong>
          </div>
          <h3 style={{ margin: '6px 0' }}>Wireless Bluetooth Headphones</h3>
          <p style={{ color: '#666', fontSize: 14 }}>Premium sound with noise cancellation. Perfect for music lovers.</p>
          <div style={{ marginTop: 12 }}>
            <a
              href="/go/revenuecpm"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{
                display: 'inline-block',
                padding: '10px 14px',
                background: '#007bff',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none'
              }}
            >
              View Deal
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <div style={{ height: 160, background: '#f4f4f4', borderRadius: 6, marginBottom: 12, display:'flex',alignItems:'center',justifyContent:'center' }}>
            <strong>Product Image</strong>
          </div>
          <h3 style={{ margin: '6px 0' }}>Smart Fitness Watch</h3>
          <p style={{ color: '#666', fontSize: 14 }}>Track your health & fitness goals with ease.</p>
          <div style={{ marginTop: 12 }}>
            <a
              href="/go/revenuecpm"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{
                display: 'inline-block',
                padding: '10px 14px',
                background: '#007bff',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none'
              }}
            >
              View Deal
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <div style={{ height: 160, background: '#f4f4f4', borderRadius: 6, marginBottom: 12, display:'flex',alignItems:'center',justifyContent:'center' }}>
            <strong>Product Image</strong>
          </div>
          <h3 style={{ margin: '6px 0' }}>Portable Power Bank 20000mAh</h3>
          <p style={{ color: '#666', fontSize: 14 }}>Fast charging with multiple ports.</p>
          <div style={{ marginTop: 12 }}>
            <a
              href="/go/revenuecpm"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{
                display: 'inline-block',
                padding: '10px 14px',
                background: '#007bff',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none'
              }}
            >
              View Deal
            </a>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid #eee', color:'#777' }}>
        <p>Disclosure: This site may show ads / partner offers. We may earn commissions from purchases.</p>
      </footer>
    </div>
  );
}
