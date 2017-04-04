# Mobile Stock Market Simulation Game proposal

## Background

Stock market simulations can be fun competitions and a stepping stone to the real stock market.

This mobile application will run month-long simulations with delayed, real-time stock market quotes, determining players’ net worth. The winning user has highest net worth at end of simulation cycle. The application will contain visualizations displaying each stock’s daily movement.

If project completed early, the application will provide an RSS feed for each stock symbol and/or market sector.

## Functionality & MVP

  - Mobile application using React Native technology
  - Gather delayed real-time stock quotes
  - Stock trade logic developed, changing players’ net worth/cash on hand on purchase/sale
  - Game and ability to create custom challenges
  - Visualizations for stock activity and user investments

## Wireframes


The primary technical challenges will be:

- Pulling finance data from HTTP requests to Google Finance. Determining the delay (speed bump) from real-time.
- Building stock trade logic and ensuring valid orders.
- Using a library, either Chart.js or Plotly, for stock market visualizations

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
- General understanding of APIs we will be using APIs (Aaron, Ryan, Andrea)
- The ability to pull a stock quote or market sector by symbol (all)
     * Google Finance HTTP requests for delayed, real-time data (Ryan, Aaron)
     * Quandl API for historical stock price data. (Andrea, Aaron)

### Phase 2: Groundwork on React components and generating powerful visualizations

####Components

-   `game_container.js`: contains the logic for the stock market game’s public tournament including its month-long duration. It compares players’ net worth and displays the leaderboard.(All)

-   `user_container.js`: displays user’s profile after login, Children include index(Aaron)

-   `challenge_container.js`: users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed. (Andrea)

-   `trade_container.js`: includes logic and form for verifying trades. Components include `TradeIndexItem` will display the individual trades, showing purchase price, order type, date, and quantity. (Aaron)

-   `session_container.js`:  contains sign-up validation and login authentication forms. May also include demo account. (Ryan, Andrea)


####Reducers
  - Session (Ryan)
  - Trade (Andrea)
  - User (Aaron)
  - Challenge (Aaron)
   +  Store (Andrea)

### Phase 3: Develop visualizations and work on trade logic
-  Finish challenges form logic
-  Visualizations API - test Chart.js + Plot.ly
-  Edge feature: develop user portfolio graph displaying on log-in

### Phase 4: Tighten visualizations (Ryan - Andrea - Aaron)
- Clear lingering bugs in infrastructure and trade logic, if any
- Continue refining Chartjs with the API information
- Add some page styling

### Phase 5: Styling the React components, building (web) demo page, and applying for App Store
- Build demo page for web users
- Ensure smooth bug-free rendering of stock chart visualizations. (All)
- Finish application for App Store.

### Bonus
- Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
