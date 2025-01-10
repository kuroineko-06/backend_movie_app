import axios from "axios";

export async function getPopularTv(req, res) {
  const { num } = req.params;
  try {
    const data = await axios.get(
      `https://phimapi.com/v1/api/danh-sach/tv-shows?page=${num}`
    );

    res.json({ success: true, content: data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
