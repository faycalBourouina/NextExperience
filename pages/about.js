import React from 'react';
import axios from 'axios';
import Error from './_error'
import Layout from '../components/Layout'; 



export default class About extends React.Component {

    static async getInitialProps() {
    	try {
    		const response = await axios.get('https://api.github.com/users/faycalbourouina');
			return { user: response.data }
    	} catch(e) {
    		if (e.response) {
	    	    const { status, statusText} = e.response;
	    		const err = {
	    			status,
	    			statusText
	    		}
	    		return { err: err }  
    		}
    		return { err: "Can't pull your request. Kawed !" }  
    	}

	}

	renderHelper() {
		const { user, err } = this.props;
		if (user) {
			return (
					<Layout title="About">
						<h1> { user.login } </h1>
						{ user.bio && <p> Bio: { user.bio } </p> }
						<img src={user.avatar_url} alt={user.login} height="200px" /> 
				    </Layout>
				)
		} 
		return <Error payload={err}  />
	}

	render() {	
			return this.renderHelper()
	}
}