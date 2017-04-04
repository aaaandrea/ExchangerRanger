# Mobile Stock Market Simulation Game proposal

## Background
Stock market simulations can be fun competitions and a stepping stone to the real stock market.

This mobile application will run month-long simulations with actual stock market quotes, determining players’ net worth. Net worth is based on a player's cash on hand + total stock value. The winning user has highest net worth at end of simulation cycle.

## Functionality & MVP
  - Mobile application using React Native technology
  - Gather actual stock quotes using API
  - HTTP requests for real time stock quotes
  - User can buy stock
  - User can sell stock
  - Global leaderboard based on players’ net worth

## Wireframes
  [Wireframes](https://github.com/adelrio1/stockSectorVisualizer/tree/master/docs/wireframes)

## Technologies & Technical Challenges
  - Using ReactNative is a new technology for all engineers.
  - Pulling finance data from HTTP requests to Google Finance. Determining the delay (speed bump) from real-time.
  - Building stock trade logic and ensuring valid orders.

## Responsibility breakdown
  - Aaron:
    - Readme
    - HTTP requests
    - React Native modeling

  - Andrea:
    - Readme
    - Authentication
    - API use
    - ReactNative modeling

  - Ryan:
    - Models
    - ActiveRecord implementation
    - ReactNative modeling

## Implementation Timeline

### Phase 1: Setting up webpack and entry file
  - A completed `package.json`/ webpack (Andrea)
  Backend:
  - Models
     + Session
     + User: username, cash_on_hand (default $10,000), net_worth (cash on hand + stock purchases)
     + Trade: user_id, stock_id, buy_price, order_type, quantity, date, value
     + Challenge: user_id, participant_id, date_start, start_amount, limit
     + Game: winner
  -  Controller
        * User
        * Session
        * Trade
        * Static pages (Andrea)

### Phase 2: API, HTTP request, and database modeling
  - The ability to pull a stock quote or market sector by symbol (all)
       * Google Finance HTTP requests for actual stock data (Ryan, Aaron)
       * Quandl API for historical stock price data. (Andrea, Aaron)
  - Begin ReactNative implementation (all)

### Phase 3: Develop visualizations and work on trade logic
  - Groundwork on ReactNative components and generating powerful visualizations
  - Leaderboard logic
  - Game logic

  #### Components
    - `game_container.js`: contains the logic for the stock market game’s public tournament including its month-long duration. It compares players’ net worth and displays the leaderboard.(All)

    - `user_container.js`: displays user’s profile after login, Children include index(Aaron)

    - `challenge_container.js`: users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed. (Andrea)

    - `trade_container.js`: includes logic and form for verifying trades. Components include `TradeIndexItem` will display the individual trades, showing purchase price, order type, date, and quantity. (Aaron)

    - `session_container.js`:  contains sign-up validation and login authentication forms. May also include demo account. (Ryan, Andrea)

  #### Reducers
    - Session (Ryan)
    - Trade (Andrea)
    - User (Aaron)
    - Challenge (Aaron)
     +  Store (Andrea)

### Phase 4: Tighten visualizations (Ryan - Andrea - Aaron)
  - Session styling
  - Home Styling
  - Stock Show page styling
  - Clear lingering bugs in infrastructure

### Phase 5: Styling the React components, building (web) demo page, and applying for App Store
  - Build demo page for web users
  - Create demo video
  - Ensure smooth bug-free rendering of stock chart visualizations. (All)
  - Upload application to Android store.

### TBD Features
  - Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
  - Visualizations for stock activity and user investments
  - Provide an RSS feed for each stock symbol and/or market sector.
  - Player ability to create custom challenges
  - Develop user portfolio graph displaying on log-in
