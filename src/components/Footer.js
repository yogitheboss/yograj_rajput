import React from 'react'

import styles from './Footer.module.css'
function Footer() {
  return (
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
      <span class="ml-3 text-xl">YograjRjpt</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© YograjRajput —
      <a href="https://twitter.com/Yograj_Rajput__" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Yograj_Rajput__</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <a href="https://twitter.com/Yograj_Rajput__" class="ml-3 text-gray-500">
       <img className={styles.githublogo} src="./assets/Twitter_white.png" alt="twitter" />
      </a>
      <a class="ml-3 text-gray-500">
       <img className={styles.githublogo} src="./github.png" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/yograj-rajput-205316229/"class="ml-3 text-gray-500">
      <img className={styles.githublogo} src="./assets/linkedin_white.png" alt="twitter" />

      </a>
    </span>
  </div>
</footer>  )
}

export default Footer