<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
</head>
<body>

  <h1>Haulage & Logistics (Junior Frontend Technical Assessment)</h1>

  <p>
    This is a simple fleet management dashboard built with 
    <span class="tag">Next.js (App Router)</span>, 
    <span class="tag">React</span>, 
    <span class="tag">Tailwind CSS</span>, and 
    <span class="tag">Leaflet.js</span>, designed for a logistics company to track trucks, view their statuses, and visualize locations on a map.
  </p>

  <h2>Setup Instructions</h2>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/yourusername/fleet-dashboard.git
cd fleet-dashboard</code></pre>

  <h3>2. Install Dependencies</h3>
  <pre><code>npm install
# or
yarn install</code></pre>

  <h3>3. Run the App Locally</h3>
  <pre><code>npm run dev
# or
yarn dev</code></pre>
  <p>Visit: <a href="http://localhost:3000/dashboard" target="_blank">http://localhost:3000/dashboard</a></p>

  <h2>Mock API Endpoint (Beeceptor)</h2>
  <p>
    Data is fetched from:
    <br>
    <strong><a href="https://haulageassessment.free.beeceptor.com/trucks" target="_blank">https://haulageassessment.free.beeceptor.com/trucks</a></strong>
  </p>

  <h2>📸 Screenshots</h2>
  <h3>Dashboard with Truck Cards and Analytics</h3>
  ![Map Screenshot](screenshots/dashboard.png)

  <h3>Truck Details with Map</h3>
  ![Map Screenshot](screenshots/map.png)

  <h2>Assumptions</h2>
  <ul>
    <li>The backend/API service is mocked with Beeceptor.</li>
    <li>Only 5 trucks are used for demonstration.</li>
    <li>All locations are static from the API.</li>
  </ul>

  <h2>Known Limitations</h2>
  <ul>
    <li>No backend persistence or auth.</li>
    <li>Real-time updates are simulated with <code>setInterval</code>.</li>
    <li>Average idle time is mocked.</li>
    <li>Some responsive edge cases may need extra tweaks.</li>
  </ul>

  <h2>Possible Improvements</h2>
  <ul>
    <li>Integrate WebSocket or polling for live tracking.</li>
    <li>Pagination and sorting for trucks list.</li>
    <li>Auth and role-based access.</li>
    <li>Better animation/loading feedback.</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li>Next.js (App Router)</li>
    <li>React</li>
    <li>Tailwind CSS</li>
    <li>Leaflet.js</li>
    <li>Beeceptor (Mock API)</li>
    <li>Recharts (optional)</li>
  </ul>

  <p><strong>Made by Kayode Dan Precious</strong></p>

</body>
</html>
