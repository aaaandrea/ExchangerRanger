# ExchangerRanger

## Background
Stock market simulations can be fun competitions and a stepping stone to the real stock market.

This mobile application runs month-long competitions using actual stock market quotes, determining players’ net worth. Net worth is based on a player's cash on hand + total stock value. The winning user has highest net worth at end of simulation cycle.

## Features
  - Mobile application using React Native technology
  - Gather actual stock quotes using API
  - HTTP requests for real time stock quotes
  - User can buy stock
  - User can sell stock
  - Global leaderboard based on players’ net worth
  - Download in the app store [here]()

## Structure
### Backend

### Frontend

### Technical list

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

### Companies

### Holdings

### Leaderboard


### TBD Features
  - Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
  - Visualizations for stock activity and user investments
  - Provide an RSS feed for each stock symbol and/or market sector.
  - Player ability to create custom challenges
       + Challenge Model: user_id, participant_id, date_start, start_amount, limit

       + `challenge_container.js`: users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed. (Andrea)
  - Develop user portfolio graph displaying on log-in
