import Hero from './Hero';

const AboutView = () => {
	return (
		<>
		<Hero text="This is the About page" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							Proin non tellus placerat, maximus eros ut, eleifend dui. Donec sodales dolor viverra augue pretium, vitae blandit mi placerat. Ut sem purus, fringilla nec ex eu, pretium lobortis urna. Curabitur nec maximus libero, a vestibulum metus. Mauris id ullamcorper sem, in imperdiet ipsum. Maecenas vitae ex mattis, viverra lectus eget, bibendum lorem. Donec molestie quis ex at scelerisque. Nullam aliquet dictum purus tincidunt rhoncus. Mauris ac augue blandit, tincidunt quam non, tempor elit. Vivamus faucibus finibus convallis. Sed rutrum vulputate finibus. Suspendisse aliquam pharetra elit eu ornare. Suspendisse viverra ut quam ut facilisis.	
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutView;