---
title: "BikeNYC 2020"
image: "/images/projects/bikenyc2020-splash.jpg"
summary: "This project was an online survey by Transportation Alternatives designed to collect data about people's feelings on biking in New York City."
promo: ""
year: 2017
----

{{< button href="https://web.archive.org/web/20170207220713/http://bikenyc2020.org/" >}}View the Site{{< /button >}}

## Overview

{{< figure src="/images/projects/bikenyc2020-home.jpg" alt="An image of a computer displaying the BikeNYC2020 site.">}}

## My Role

As the sole technical staff member at the time the project was hitting the drawing board, I was tasked with taking a 50-page Google Doc with every question and turning it into a slick app that people would want to take.

## Architecture

Since this project was at its core very interactive, I chose to use a React-based survey library called Survey.js to power the survey, which allowed conditional questions, a translatable interface, and quick performance.

{{< figure src="/images/projects/bikenyc2020-home.png" caption="" alt="A screenshot of the BikeNYC2020 home page, showing an illustration of different kinds of people on bikes.">}}

## Development

The survey itself began as a 50-page document, which I transformed into a JSON file with all the branching logic included. Having the questions stored in code made making editing the survey and tracking edits in version control simple. Another of the requirements was a live counter of how many people had taken the survey, and this was achieved using the [Google Analytics Super Proxy](https://developers.google.com/analytics/solutions/google-analytics-super-proxy), running in a Google App Engine instance.

## Launch

The survey site's files are hosted on Amazon S3, with all survey data flowing back into the [SurveyJS](http://surveyjs.org/) site and constituent data sent to TransAlt's CRM. The English version of the survey launched first, followed a week later by the Spanish version. At the time of writing, it's been taken over 5,000 times.