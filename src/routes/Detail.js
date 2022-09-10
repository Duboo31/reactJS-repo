import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    getMovie();
  }, [id])
  console.log("디테일 업데이트 완료")
  return (
    <div>
      {loading ? <h4>Loading...</h4> :
        <div>
          <img src={movie.medium_cover_image} alt="cover img"/>
          <h2>{movie.title}</h2>
          <span>{movie.rating}</span>
          <ul>
            <li>
              {movie.genres.map((g, idx) => <div key={idx}>{g}</div>)}
            </li>
          </ul>
        </div>}
    </div>
  )

}
 export default Detail;