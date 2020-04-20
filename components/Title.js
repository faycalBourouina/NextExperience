import Link from 'next/link';

export default (props) => {
	const { title } = props; 
	return (
			<div>
				{ `${title} Post Loading...` } 
				<Link as={`blog/post/${title}`} href={`blog/post?title=${title}`}>
					<a>Read</a>
				</Link>
			</div>
		)
}