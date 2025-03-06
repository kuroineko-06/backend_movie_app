import axios from "axios";

export async function getCategory(req, res) {
  try {
    const response = await axios.get("https://phimapi.com/the-loai");
    res.status(200).json({ success: true, content: response.data });
  } catch (error) {
    console.log("Error in getCategory controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

// export async function getMovieByCategory(req, res) {
//   try {
//     const response = await axios.get(
//       'https://phimapi.com/v1/api/the-loai/{type_list}?page={page}&sort_field={sort_field}&sort_type={sort_type}&sort_lang={sort_lang}&country={country}&year={year}&limit={limit}'
//     );
//     res.status(200).json({ success: true, content: response.data });
//   } catch (error) {
//     console.log("Error in getCategory controller: ", error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// }
