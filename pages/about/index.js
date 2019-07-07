import Layout from '../../components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="card bg-light about-container">
        <div className="card-header">
          <h4>
            Next JS is the framework used for rendering react application on
            server side.
          </h4>
        </div>
        <div className="card-body">
          <h4 className="card-title">Some core Features are</h4>
          <ul>
            <li>Server renders our react application.</li>
            <li>Automatic code splitting for faster page reload.</li>
            <li>Simple client side routing.</li>
            <li>Build in CSS support.</li>
            <li>
              Able to implement with Express or any other node JS framework.
            </li>
            <li>Hot reloading.</li>
            <li>Deployment.</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
