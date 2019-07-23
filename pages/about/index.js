import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { aboutUs } = this.props
    return (
      <Layout>
        <div className="card bg-light about-container">
          <div className="card-header">
            <h4>{aboutUs.heading}</h4>
          </div>
          <div className="card-body">
            <h4 className="card-title">{aboutUs.featureHeading}</h4>
            <ul>
              {aboutUs.feature.map((data, index) => {
                return <li key={index}>{data}</li>
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

About.getInitialProps = async () => {
  const res = await fetch('http://localhost:3002/aboutUs')
  const data = await res.json()
  return {
    aboutUs: data
  }
}

export default About
