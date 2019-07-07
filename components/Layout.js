import Head from 'next/head'
import NavBar from './NavBar'

const Layout = props => {
  return (
    <div>
      <Head>
        <title>new App</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
        <link href="../static/css/styles.css" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div className="container-fluid">{props.children}</div>
    </div>
  )
}

export default Layout
