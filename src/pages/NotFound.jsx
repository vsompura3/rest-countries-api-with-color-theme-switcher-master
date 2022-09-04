import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default NotFound
