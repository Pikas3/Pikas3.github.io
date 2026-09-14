import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { site } from './content'

document.title = site.pageTitle

const description = document.querySelector('meta[name="description"]')
if (description) {
  description.setAttribute('content', site.pageDescription)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
