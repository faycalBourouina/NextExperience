import Link  from 'next/link';
import Layout from '../components/Layout'; 


export default () => {

	return (<Layout title="About">
				<Link href='/'> 
					Go Home 
				</Link>
				<p>
					I am a Javascript Developer
				</p> 
				<img src="/static/js-logo.jpg" alt="JS logo" height="200px" /> 
			</Layout>
		)
}