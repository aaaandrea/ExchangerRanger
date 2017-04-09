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
The React Native overall using the Redux cycle enabled us to have smooth transitioning between the necessary components. The React store allowed reliable state transfers between component changes, and communicating with the backend.

### Languages and Frameworks
  * [Ruby on Rails](http://rubyonrails.org/)
  * [PostgreSQL](https://www.postgresql.org/)
  * [React Native](https://facebook.github.io/react-native/)
  * [React Native Searchbar](https://github.com/umhan35/react-native-search-bar)
  * [Redux](https://github.com/reactjs/redux)
  * [Fetch](https://facebook.github.io/react-native/docs/network.html)
  * Gems
    * [Jbuilder](https://github.com/rails/jbuilder)
    * [BCrypt](https://github.com/codahale/bcrypt-ruby)

## Technologies & Technical Challenges
  * Pulling finance data from HTTP requests to Google Finance. Determining the delay (speed bump) from real-time.
  * Building stock trade logic and ensuring valid orders.
  * Using React Native Fetch functionality to enable up to date stock prices

## Responsibility breakdown
  * Aaron:
    * Proposal Readme
    * HTTP requests
    * Fetch Requests
    * Leaderboard Component
    * Video
    * Demo Page

  * Andrea:
    * package.json
    * User Authentication
    * Fetch Requests
    * Splash/Login/Sign up React Native Components
    * Styling
    * Production Readme

  * Ryan:
    * Database structure
    * ActiveRecord implementation
    * StockIndex/Home React Native Component
    * Search

## Primary Components
### User Auth
User authentication is handled in Rails using BCrypt for password hashing. Passwords are not saved to the database, only salted password hashes to ensure user security. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials. Additionally they are assigned a session token which is reset a login to ensure the user is the same as the user logged in the database.

```

```


[need image or code]

### Holdings
Holdings are the heart of ExchangerRanger, and are designed to be up to date. Users can buy, sell, sort, and filter companies on the fly to increase their holdings and net-worth. Just by typing in the company they are searching for, users can find the most marketable stock details quickly and easily.

  ```
  export const createHolding = (data) => {
    return fetch(`http://localhost:3000/api/holdings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      })
    });
  };
  ```

[need image or code]

### Search
ExchangerRanger utilizes react-native-searchbar to search for companies. ExchangerRanger utilizing fetch and http requests to ensure the most up to date information is retrieved..

#### Frontend
  ```
  <View style={styles.container}>
    <SearchBar style={styles.search}
      ref='searchBar'
      placeholder='Search'
      onChangeText={this.filterResults}
    />
  ```

#### Filter results based on what the user types
  ```
  filterResults(value){
    let companies = [];
    this.props.stocks.forEach(company => companies.push(company));
    this.setState({stocks: companies.filter(stock => stock.name.toLowerCase().includes(value.toLowerCase())
      ||stock.symbol.toLowerCase().includes(value.toLowerCase()))});
  }
  ```

#### Use Redux actions and Fetch request to retrieve filtered results from the backend

##### Redux action
  ```
  export const fetchCompanies = filters => dispatch => (
    APIUtil.fetchCompanies(filters)
      .then(companies => dispatch(receiveCompanies(companies)))
  );
  ```
##### Fetch Request
  ```
  export const fetchCompanies = () => {
    return fetch('http://localhost:3000/api/companies', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json());
  };
  ```

[need image or code]

### Leaderboard
A global leaderboard tracks all player's net-worth in order to have a winner at the end of each month.

```

```

[need image or code]

### Future Features
  - Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
  - Visualizations for stock activity and user investments
  - Provide an RSS feed for each stock symbol and/or market sector.
  - Player ability to create custom challenges with friends
       * Private challenges: user_id, participant_id, date_start, start_amount, limit
       * users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed.
  - Develop user portfolio graph display on log-in
  - User badges for each month won
