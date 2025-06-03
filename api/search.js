// /api/search.js
export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  try {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
