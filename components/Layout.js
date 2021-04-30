import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <head>
        <title>Recipes & Contentful</title>
      </head>

      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Recipes</span>
              <span>&</span>
            </h1>
            <h2>Contentful</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Recipes & Contentful</p>
        <a href='https://github.com/melissa2527/recipe-nextjs-contentful'><GitHubIcon/></a>
      </footer>
    </div>
  )
}