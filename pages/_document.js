import Document, { Head, Main, NextScript } from 'next/document';



class MyDocument extends Document {
	render() {
			return (
					<html>
						<Head>
							<link 
								rel="stylesheet" 
								href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
							/>
							<link 
								rel="stylesheet"
								href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" 
							/>
						</Head>
						<body>
							<Main /> 
							<NextScript />
						</body>
						<style global jsx> {`
								body {
									margin: 0em;
									font-size: 110%;
									background: #f0f0f0;
									font-family: "Roboto", sans-serif;
								}								
							`} </style>
					</html>
				)			
		}
} 

export default MyDocument;