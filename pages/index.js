import Link from 'next/link';
import Layout from '../components/Layout'; 


export default () => {
 	return (
 			<Layout title="Home">
 				<Link href='/about'>
 					Go to About 
 				</Link>
 				<p>
 					first next page ya l3atay !!
 				</p>
 			</Layout>
 		)
 }