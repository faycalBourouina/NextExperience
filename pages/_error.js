import Layout from '../components/Layout'; 

export default ( props ) => {
	const { payload } = props;
	return(
		<Layout>
			<h1>			
				{ payload.status ? `${ payload.status } | ${ payload.statusText }` : payload }
			</h1> 			
		</Layout>
	)
} 