import Hero from './Hero';
import { Link } from 'react-router-dom';


// using Bootstrap Cards for search results
const MovieCard = ({movie}) => {
	const noPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOrQJgo8w2atwBY6iCaEJmVArlQc6FVkQAPXfErr9hA&s'
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
	const detailUrl = `/movies/${movie.id}`

	return(
		<div className="col-lg-3 col-md-3 col-2 my-4">
			<div className="card">
				{posterUrl !== "https://image.tmdb.org/t/p/w500null" ? (
						<img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
					):(
						<img src={noPoster} className="card-img-top" alt={movie.original_title}/>
					)}
					<div className="card-body">
						<h5 className="card-title">{movie.original_title}</h5>
						<Link to={detailUrl} className="btn btn-primary">Show details</Link>
				</div>
			</div>
		</div>
	)
}


const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`
	// loop
	const resultsHtml = searchResults.map((obj, i) => {
		return <MovieCard movie={obj} key={i} />
	})

	return (
		<>
			<Hero text={title} />
			{/*put the results here*/}
			{resultsHtml != 0 ? (
			<div className="container">
				<div className="row">
					{resultsHtml}
				</div>
			</div>): <h3 className="my-5 mx-5">No results</h3> 
		}

		</>
	)
}

export default SearchView;