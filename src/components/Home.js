import Hero from './Hero';

const Home = () => {
	return ( 
		<>
			<Hero text="Welcome to the Home Page!" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							"There is no one who loves pain itself, 
							who seeks after it and wants to have it, 
							simply because it is pain..."
							Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit. 
							In congue nulla dignissim ligula tristique
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;
