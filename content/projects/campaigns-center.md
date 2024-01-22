---
title: Campaigns Center
image: "/images/projects/campaigns-center-home.png"
description: Description of Campaigns Center project
summary: "This project was an online survey by Transportation Alternatives designed to collect data about people's feelings on biking in New York City."
year: 2016
tags:
  - Development
  - Data Integration
----

{{< button href="https://web.archive.org/web/20180308171043/https://campaigns.transalt.org/" >}}View the Site{{< /button >}}

## My Role

For this project, after the initial gathering of requirements, the main technical hurdle was to write the PHP connector from the Drupal site to the CRM API, which I wrote and debugged myself (with some expert code review by the Director of Technology). I also built the site from the ground up working off of a design by the wonderfully talented Sasha O'Malley.

## Requirements gathering

This project was envisioned as a way to display online petitions in a more attractive way. TransAlt used a legacy system to power the display of their online petitions, but there was an API allowing submission of the same data through another frontend.

## Site build with Drupal

I created the site using Drupal as the frontend, managing all content and revision history. Drupal would also handle the counts of signatures and other metadata. The Drupal theme was built as a Bootstrap subtheme, in order to have harmonious stylings with the main transalt.org site, also built in Bootstrap.

## CRM Connection

The trickiest part of the whole project was connecting the Drupal site to the legacy CRM. This was accomplished by writing a connection in PHP that processed the signature inputs.

## Launch

The site initially launched with one petition, a plea from the sister of a cyclist had been killed in Brooklyn. It was a viral success, collecting over five thousand signatures in a few days. In the next few weeks, staffers added all previous campaigns to the center.

## Tracking and Reporting

In the legacy system, there was limited reporting of signatures. However, one of the features of the new site was an internal dashboard pulling content from Google Analytics events. When a person signed a petition, the dashboard would reflect the totals within five minutes, allowing organizers to see when a petition was going viral.