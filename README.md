# ExchangerRanger

## Background
Stock market simulations can be fun competitions and a stepping stone to the real stock market.

This mobile application runs month-long competitions using actual stock market quotes, determining players’ net worth. Net worth is based on a player's cash on hand + total stock value. The winning user has highest net worth at end of simulation cycle.

## Features
  - Mobile application using React Native technology
  - Gather real-time stock quotes using HTTP Requests
  - User can buy and sell stock to earn/lose net-worth
  - User can search for a specific stock
  - Global leaderboard based on players’ net worth
  - Download in the app store [here]()

## Structure
### Backend
The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use Fetch and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

### Frontend

### Languages and Frameworks
  * [Ruby on Rails]
  * [PostgreSQL]
  * [React Native]
  * [React Native Searchbar]
  * [Redux]
  * [Fetch]
  * Gems
    * [Jbuilder]
    * [BCrypt]

## Technologies & Technical Challenges
  - Using ReactNative is a new technology for all engineers.
  - Pulling finance data from HTTP requests to Google Finance. Determining the delay (speed bump) from real-time.
  - Building stock trade logic and ensuring valid orders.

## Responsibility breakdown
  - Aaron:
    - Proposal Readme
    - HTTP requests
    - Fetch Requests
    - Leaderboard Component
    - Video
    - Demo Page

  - Andrea:
    - package.json
    - User Authentication
    - Fetch Requests
    - Splash/Login/Sign up React Native Components
    - Styling
    - Production Readme

  - Ryan:
    - Database structure
    - ActiveRecord implementation
    - StockIndex/Home React Native Component
    - Search

## Primary Components
### User Auth
User authentication is handled in Rails using BCrypt for password hashing. Passwords are not saved to the database, only password hashes to ensure user security. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials.

### Holdings
Holdings are the heart of ExchangerRanger, and are designed to be up to date. Users can buy, sell, sort, and filter companies on the fly to increase their holdings and net-worth. Just by typing in the company they are searching for, users can find the most marketable stock details quickly and easily.

### Search
ExchangerRanger utilizes react-native-searchbar multisearch to search for companies utilizing fetch and http requests to ensure the most up to date information is retrieved..

### Leaderboard
A global leaderboard tracks all player's net-worth in order to have a winner at the end of each month.

### Future Features
  - Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
  - Visualizations for stock activity and user investments
  - Provide an RSS feed for each stock symbol and/or market sector.
  - Player ability to create custom challenges with friends
       * Private challenges: user_id, participant_id, date_start, start_amount, limit
       * users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed.
  - Develop user portfolio graph display on log-in
  - User badges for each month won
