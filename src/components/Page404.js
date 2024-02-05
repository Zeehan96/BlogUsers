import { Link } from "react-router-dom";

function Page404(){
    return(
  <div>
 <h1 style={{textAlign:'center'}}> Page Not Found 404</h1>
 <Link to={'/PostList'}>Go to postlisting</Link>
  </div>
    );
}
export default Page404;