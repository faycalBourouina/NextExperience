import Layout from '../../components/Layout';
import Title from '../../components/Title';


export default () => {
	let posts = ['Next', 'Sass', 'GraphQL'];
	let postList = posts.map((post) => <Title title={post} /> )
	return ( 
			<Layout title="My Blog">
				{ postList }
			</Layout>
	);
}