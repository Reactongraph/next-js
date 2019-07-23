import Layout from '../../components/Layout'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <div className="login">
          <div className="container col-md-6 login_container">
            <form>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked=""
                    />
                    Remember me
                  </label>
                </div>
              </fieldset>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login
