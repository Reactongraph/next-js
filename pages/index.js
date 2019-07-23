import Layout from '../components/Layout'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <div className="home-container">
          <div className="jumbotron">
            <h1 className="display-3">Next Js</h1>
            <p className="lead">
              Next JS is the framework used for rendering react application on
              server side.
            </p>
            <hr className="my-4" />
            <p>
              Some basic features is server renders our react application and
              automatic code splitting for faster page reload.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index
