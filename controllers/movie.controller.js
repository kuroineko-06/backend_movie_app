import axios from "axios";

export async function getTrendingMovie(req, res) {
  const { num } = req.params;
  try {
    const data = await axios.get(
      `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${num}`
    );

    res.json({ success: true, content: data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getSingleMovie(req, res) {
  const { num } = req.params;
  try {
    const data = await axios.get(
      `https://phimapi.com/v1/api/danh-sach/phim-le?page=${num}`
    );

    res.status(200).json({ content: data.data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getSeriesMovie(req, res) {
  const { num } = req.params;
  try {
    const data = await axios.get(
      `https://phimapi.com/v1/api/danh-sach/phim-bo?page=${num}`
    );

    res.status(200).json({ content: data.data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getAnimeMovie(req, res) {
  const { num } = req.params;
  try {
    const data = await axios.get(
      `https://phimapi.com/v1/api/danh-sach/hoat-hinh?page=${num}`
    );

    res.status(200).json({ content: data.data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getMovieDetails(req, res) {
  const { name } = req.params;
  try {
    const data = await axios.get(`https://phimapi.com/phim/${name}`);

    res.status(200).json({ content: data.data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

// export async function getMoviesByCategory(req, res) {
//   const { category } = req.params;
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
//     );
//     res.status(200).json({ success: true, content: data.results });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// }
