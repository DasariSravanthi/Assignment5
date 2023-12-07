import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'

class Jobs extends Component {
  state = {profileDetails: {}}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const formattedData = {
      name: fetchedData.profile_details.name,
      profileImageUrl: fetchedData.profile_details.profile_image_url,
      shortBio: fetchedData.profile_details.short_bio,
    }

    this.setState({profileDetails: formattedData})
  }

  render() {
    const {profileDetails} = this.state
    console.log(profileDetails)

    return (
      <>
        <Header />
        <div className="jobs-background">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-element"
            />
            <button
              className="search-button"
              type="button"
              data-testid="searchButton"
            >
              <BsSearch className="search-icon" />
            </button>
          </div>
          <div className="profile-container">
            <p>Rahul</p>
          </div>
          <hr className="break-line" />
          <div className="select-container">
            <h1 className="list-heading">Type of Employment</h1>
            <ul className="employment-list-container">
              <li className="list-item">Full Time</li>
              <li className="list-item">Part Time</li>
              <li className="list-item">Freelance</li>
              <li className="list-item">Internship</li>
            </ul>
          </div>
          <hr className="break-line" />
          <div className="select-container">
            <h1 className="list-heading">Salary Range</h1>
            <ul className="salary-list-container">
              <li className="list-item">10LPA and above</li>
              <li className="list-item">20LPA and above</li>
              <li className="list-item">30LPA and above</li>
              <li className="list-item">40LPA and above</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
