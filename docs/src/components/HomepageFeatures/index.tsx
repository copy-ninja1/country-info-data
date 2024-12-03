import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Metrics from './metrics';

type FeatureItem = {
  id: number;
  text: string;
};

const FeatureList: FeatureItem[] = [
  { id: 100, text: "Lookup countries by their country code or name." },
  { id: 101, text: "Get lists of all countries, continents, or regions." },
  { id: 102, text: "Retrieve detailed country information, including continent and region" },
  { id: 103, text: "Update country data with new information." },
  { id: 104, text: "Search for countries based on partial name matches." },
  { id: 105, text: "Retrieve countries from multiple continents or regions at once." },
  { id: 106, text: "Check if a country belongs to a specific continent or region." },
  { id: 107, text: "Filter countries by continent, region, or country code." },
  { id: 108, text: "Exclude countries by continent, region, country code, or country name." },
  { id: 109, text: "Filter countries by name or partial name match." },
  { id: 110, text: "Sort the results by name, continent, or region." },
  { id: 111, text: "Limit the number of results returned." },
  { id: 112, text: "Retrieve specific fields from the country details." },
  { id: 113, text: "Include additional details such as continent and region for each country." },
  { id: 114, text: "Chain methods for building complex queries." },
];


function FeatText({ title }: { title: string }) {
  return (
    <div className={styles.featContent}>
      <img src='./img/check.svg' />
      <span>{title}</span>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <h1 className={styles.heading}>Country-Info-Data</h1>
          <p className={styles.text}>The library that provides you with a streamlined solution for managing and retrieving detailed information about continents and countries, including their names, codes, and other associated data, enabling efficient access and organization of geographical details.</p>

          <div className={styles.buttons}>
            <Link className={styles.button_89} to="/docs/intro">
              Read The Docs
            </Link>
          </div>


          <div>
            <Metrics />
          </div>

          <div className={styles.featContainer}>
            <h2>Zero dependencies. Full features included.</h2>
            <p>With zero dependencies, Country-Info-Data is exceptionally lightweight while offering a rich set of features. Whether it's a side project or a large-scale application, the library is a robust tool designed to handle diverse use cases, supporting your projects as they scale with the speed of your creativity.</p>
          </div>


          <div className={styles.gridContainer}>
            <div className={styles.featGrid}>
              {FeatureList.map((feat) => (
                <div key={feat.id}>
                  <FeatText title={feat.text} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.customFooter}>
            <div>
              <a href="/docs/intro">Docs</a>
              <a href="https://github.com/copy-ninja1/country-info-data">GitHub</a>
            </div>

            <div>
              <p> Copyright © {new Date().getFullYear()} Country-Info-Data. Built with Docusaurus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
