/**
 * Created by vitold on 22.02.17.
 */
import React, {Component} from 'react'
import	{	bindActionCreators	}	from	'redux'
import {connect} from 'react-redux'
import User from '../components/Users'
import Page from '../components/Page'
import * as pageActions from '../actions/PageAction'

class App extends Component{
		render(){
                const {user, page} = this.props;
				return	<div>
							<User	name={user.name}	/>
							<Page	photos={page.photos} year={page.year} />
                        </div>
		}
}

function mapStateToProps(state)	{
		return	{
				user: state.user,
				page: state.page
		}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
