
import MainNavigation from './main-navigation.js'
const Layout = (props) => {
  return (
    <>
        <MainNavigation />
        <main>{props.children}</main>
    </>
  )
}

export default Layout