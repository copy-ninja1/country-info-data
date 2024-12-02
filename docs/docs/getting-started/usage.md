---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔌 Usage

The **Country-Info-Data** library offers a powerful and flexible API for querying detailed country, continent, and region information. Whether you're building a global directory, filtering countries by geographic location, or working with complex datasets, this package simplifies the process with intuitive, chainable methods.

In this section, you'll find practical examples that demonstrate how to leverage various features of the package. From basic queries to advanced filtering and method chaining, these examples will help you get started quickly and integrate **Country-Info-Data** seamlessly into your project.

Let's dive in and explore how easy it is to work with country-info-data!

<Tabs>
<TabItem value="node" label="NodeJs" default>

```typescript
import { CountryInfoQuery } from "country-info-data";

// Create a new query instance
const query = new CountryInfoQuery();

// Build a query to find countries in Africa, excluding specific countries, and limit the results
const results = query
  .continent(["AF"])
  .excludeCountryName(["United States", "Canada"])
  .limit(5)
  .execute();

console.log(results);
```

</TabItem>

<TabItem value="react" label="ReactJs">
```typescript

import React, { useState } from "react";
import { CountryInfoQuery } from "country-info-data";

const CountryList = () => {
const [results, setResults] = useState([]);

const fetchCountries = () => {
const query = new CountryInfoQuery();
const result = query
            .continent(["AF"])
            .excludeCountryName(["United States", "Canada"])
            .limit(5)
            .execute();
     setResults(result);
     };

return (
     <div>
      <button onClick={fetchCountries}>Fetch Countries</button>

    <ul>
       {results.map((country) => (
        <li key={country.code}>{country.name}</li>  
       ))}
    </ul>
   </div>
    );
   };
   export default CountryList;
```
</TabItem>


<TabItem value="vue" label="VueJs">
```typescript

<template>
  <div>
    <button @click="fetchCountries">Fetch Countries</button>
    <ul v-if="results.length">
      <li v-for="country in results" :key="country.code">{{ country.name }}</li>
    </ul>
  </div>
</template>

<script>
import { CountryInfoQuery } from "country-info-data";

export default {
  data() {
    return {
      results: [],
    };
  },
  methods: {
    fetchCountries() {
      const query = new CountryInfoQuery();
      this.results = query
        .continent(["AF"])
        .excludeCountryName(["United States", "Canada"])
        .limit(5)
        .execute();
    },
  },
};
</script>
```

</TabItem>


<TabItem value="angular" label="AngularJs">

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { CountryInfoQuery } from 'country-info-data';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="fetchCountries()">Fetch Countries</button>
      <ul>
        <li *ngFor="let country of results">{{ country.name }}</li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  results: any[] = [];

  fetchCountries() {
    const query = new CountryInfoQuery();
    this.results = query
      .continent(['AF'])
      .excludeCountryName(['United States', 'Canada'])
      .limit(5)
      .execute();
  }
}
```

</TabItem>

<TabItem value="svelte" label="Svelte">
```typescript

<script>
  import { CountryInfoQuery } from "country-info-data";
  let results = [];

  const fetchCountries = () => {
    const query = new CountryInfoQuery();
    results = query
      .continent(["AF"])
      .excludeCountryName(["United States", "Canada"])
      .limit(5)
      .execute();
  };
</script>

<main>
  <button on:click={fetchCountries}>Fetch Countries</button>
  {#if results.length > 0}
    <ul>
      {#each results as country}
        <li>{country.name} - {country.code}</li>
      {/each}
    </ul>
  {:else}
    <p>No results yet. Click the button to fetch countries.</p>
  {/if}
</main>

<style>
  button {
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
  }
</style>

```

</TabItem>


</Tabs>


