---
title: Supabase Setup
description: In this activity, you'll upload data into a supabase project and then practice fetching the data using Postman. This will help you practice working with environment variables in order to query data from an external service - preparing your for the next step of deploying data to a frontend.
---

## Instructions

- Create a new supabase project
- In your project, create 2 tables by importing the provided `.csv` files
- Enable RLS on the tablets and set it so that anyone with the anon key can read from the tables (no write policies)
  - take a screenshot showing your enabled RLS policies
- Use Postman to query your tables(either as a vscode extension or in the standalone app)
  - add the api key to the headers (make sure to use `apikey` as the key name)
  - Make a query and take a screenshot of the successful query data fetch

## Rubric (weighted at 5% of final grade)

- Data upload: 2 points
- Rls policies: 2 points
- Environment variables: 2 points
- Query: 2 points
- External query: 2 points
  - refers to when I test out your endpoint that they work.

## Submission Instructions

- Attach the screenshots to your submission
- in the text box, add the url to your supabase instance and the apikey (these will be used to test your endpoints on my end)
