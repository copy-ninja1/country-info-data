import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoCodeDownloadSharp } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import styles from './styles.module.css';


export default function Metrics(): JSX.Element {

  const [npmDownloads, setNpmDownloads] = useState(null);
  const [githubStars, setGithubStars] = useState(null);
  const [contributorsCount, setContributorsCount] = useState(null);



  useEffect(() => {
    // Fetch NPM Downloads
    axios
      .get('https://api.npmjs.org/downloads/point/last-month/country-info-data')
      .then(response => setNpmDownloads(response.data.downloads))
      .catch(error => console.error('NPM API error:', error));

    // Fetch GitHub Stars
    axios
      .get('https://api.github.com/repos/copy-ninja1/country-info-data')
      .then(response => setGithubStars(response.data.stargazers_count))
      .catch(error => console.error('GitHub API error:', error));

    // Fetch Contributors
    axios
      .get('https://api.github.com/repos/copy-ninja1/country-info-data/contributors')
      .then(response => setContributorsCount(response.data.length))
      .catch(error => console.error('GitHub API error:', error));
  }, []);


  return (
    <div className={styles.metricContainer}>
      <div className={styles.metricFlex}>
        <div className={styles.metricCard}>
          <IoCodeDownloadSharp className={styles.icon} />
          <div>
            <h3>{npmDownloads ?? 'Loading...'}</h3>
            <i>Npm Downloads</i>
          </div>
        </div>

        <div className={styles.metricCard}>
          <RiStarSFill className={styles.icon} />
          <div>
            <h3>{githubStars ?? 'Loading...'}</h3>
            <i>Stars on Github</i>
          </div>
        </div>

        <div className={styles.metricCard}>
          <FaPeopleGroup className={styles.icon} />
          <div>
            <h3>{contributorsCount ?? 'Loading...'}</h3>
            <i>Contributors on Github</i>
          </div>
        </div>
      </div>
    </div>
  )
}