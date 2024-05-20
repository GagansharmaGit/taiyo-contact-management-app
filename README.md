
# Deliverable Documentation




## Deliverable Overview
#### 1. Contact Management App with Maps and Charts

•A fully functional contact management application built using ReactJS,
TypeScript, TailwindCSS, React Router v6, and React Query.

• Includes features for adding, viewing, editing, and deleting contacts.

• MapAndChart with a line graph showing COVID-19 cases fluctuations and a
React Leaflet map displaying COVID-19 data by country.

• Deployed Link: Taiyo Contact Management App

• LINK : https://taiyo-contact-management-app.vercel.app/
## Commented Code

• All code should be well-documented with comments explaining the
functionality and logic used.
## Documentation

• Detailed instructions on how to run the application.

• Information on the API endpoints used, including the data    format returned by
the APIs.
# Steps to Start the Program
## Prerequisites

• Node.js (v14 or later)

• npm
## Installation Steps
### 1. Clone the Repository

git clone <https://github.com/GagansharmaGit/taiyo-contact-management-
app.git>
## Installation

Install Project

```bash
  git clone <https://github.com/GagansharmaGit/taiyo-contact-management-
app.git>
```
    
### 2. Install Dependencies



```bash
  npm install
```


### 3. Start the Development Server

```bash
npm start
```
### 4. Build for Production (optional)

```bash
npm run build
```
### 5. Running the Application

• After running npm start, the application will be available at

• http://localhost:3000.

• For the production build, deploy the contents of the build directory to a static
hosting service like Vercel, GitHub Pages, or Heroku.
# API Endpoints and Data Format
## API Endpoints

### 1. World Wide Data of Cases

• URL: https://disease.sh/v3/covid-19/all

• Description: Provides global COVID-19 data.

• Response Format:
```bash
{
    "cases": 123456789,
    "deaths": 1234567,
    "recovered": 12345678,
    "active": 12345678,
    ... 
}
```


### 2. Country Specific Data of Cases

• URL: https://disease.sh/v3/covid-19/countries

• Description: Provides COVID-19 data for all countries.

• Response Format:

```bash
[
    {
        "country": "USA",
        "cases": 123456789,
        "deaths": 1234567,
        "recovered": 12345678,
        "active": 12345678,
        "countryInfo": {        
            "lat": 37.0902,
            "long":-95.7129,
        ... }, 
... }, 
]
```
### 3. Graph Data for Cases with Date

• URL: https://disease.sh/v3/covid-19/historical/all?lastdays=all

• Description: Provides historical data of COVID-19 cases worldwide.

• Response Format:
```bash
{
    "cases": {
    "1/22/20": 555,
    "1/23/20": 654,
    ... },
    "deaths": {
    "1/22/20": 17,
    "1/23/20": 18,
    ... },
    "recovered": {
    “1/22/20": 28,
    "1/23/20": 30,
    .. }
}
```

# Code Structure
### 1. Components

• AddContact.tsx : Form component for adding and editing contacts.

• ShowContacts.tsx: Displays the list of contacts and shows detailed information of a contact.

• ChartAndMap.tsx: Displays the line graph and map.
### 2. API Calls

• https://disease.sh/v3/covid-19/historical/all?lastdays=all:
Custom hook using React Query to fetch global COVID-19 data.

• https://disease.sh/v3/covid-19/countries: Query to fetch country-
specific COVID-19 data.
### 3. State Management

• Using Redux for managing contact data.

• Using React Query for managing remote data fetching.
### 4. Styling

• TailwindCSS for styling components to ensure responsiveness and modern
UI design.
# Deployment
### 1. Vercel

• Install the Vercel CLI.

• Run vercel in the project root and follow the prompts.
### 2. GitHub Pages

• Build the project using npm run build.

• Deploy the build directory using the gh-pages branch or using GitHub
Actions.
### 3. Heroku

• Create a Heroku app using the Heroku CLI.

• Push the project to the Heroku remote repository for deployment.
# By following this guide, you will be able to set up, run, and understand the API usage in the contact management app with maps and charts.
