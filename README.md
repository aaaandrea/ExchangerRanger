# ExchangerRanger

## Background

[Try a live demo](https://exchangerranger.github.io/ExchangerRangerDemo/)

Users buy and sell stocks in order to improve their net-worth. Stock market simulations can be fun competitions and a stepping stone to the real stock market.

This mobile application runs month-long competitions using actual stock market quotes, determining players’ net worth. Net worth is based on a player's cash on hand + total stock value. The winning user has highest net worth at end of simulation cycle.

## Features
  * Mobile application using React Native technology
  * Gather real-time stock quotes using HTTP Requests
  * User can buy and sell stock to earn/lose net-worth
  * User can search for a specific stock
  * Global leaderboard based on players’ net worth
  * Download in the app store

## Structure
### Backend
The app was built using Ruby on Rails on the back end with a postgreSQL database. Backend structure is RESTful and all the data requests use Fetch and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

### Frontend
The app is built with a React Native frontend utilizing the Redux cycle. This enabled us to have smooth transitioning between the necessary components. The React store allowed for a reliable transfer of state between components, and communicating the necessary requests to the backend. We chose React Native as a reliable frontend, in part for it's use of fetch requests over AJAX requests used in React.js. The fetch function, which you can see demonstrated in the Technologies & Technical Challenges section of this document, provides an elegant API in the window scope in order to handle JavaScript promises and request headers more explicitly.

## Languages and Frameworks
  * [Ruby on Rails](http://rubyonrails.org/)
  * [PostgreSQL](https://www.postgresql.org/)
  * [React Native](https://facebook.github.io/react-native/)
  * [React Native Searchbar](https://github.com/umhan35/react-native-search-bar)
  * [React Native Navigator](https://facebook.github.io/react-native/docs/navigator.html)
  * [Redux](https://github.com/reactjs/redux)
  * [Fetch](https://facebook.github.io/react-native/docs/network.html)
  * Gems
    * [Nokogiri](http://www.nokogiri.org/)
    * [Jbuilder](https://github.com/rails/jbuilder)
    * [BCrypt](https://github.com/codahale/bcrypt-ruby)

## Technologies & Technical Challenges
### Ensure mobile user security
User authentication is handled in Rails using BCrypt for password hashing. Passwords are not saved to the database, only salted password hashes to ensure user security. When users log in, the password they provide is rehashed and checked against the original encrypted password hash to verify credentials. Additionally they are assigned a session token which is reset at login to ensure the user is the same as the user logged in the database.

#### Ensure user password matches password input
We use BCrypt::Password in order to ensure user security by salting a small chunk of random data to the password before it is hashed. This way we can check if the user is using the correct password, by comparing the two. (seen below)
  ```ruby
  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  ```


### Ensure reliable and up to date stock data
Retrieving publicly available and reliable finance data was among the initial challenges of ExchangerRanger. After heavily researching a variety of APIs, most of which were out of date and no longer used, we discovered we could user the Nokogiri gem which parses HTML via CSS3 selectors. Using Google Finance we parsed known company symbols seeded to our database in order to retrieve the current stock price.

  ```ruby
  def self.find_value(symbol)
    symbol = symbol.upcase
    url = "https://www.google.com/finance/getprices?i=60&p=1d&f=c&q=#{symbol}"
    doc = Nokogiri::HTML(open(url))
    current_price = doc.text.split(/\n/).last
    current_price
  end
  ```

### Use React Native Fetch functionality to enable up to date stock prices
Holdings are the heart of ExchangerRanger, and are designed to be up to date. Holdings are demonstrated as a simple join table which includes associations between companies and users, along with the quantity of stock a user currently owns. Users can buy, sell, sort, and filter companies on the fly to increase their holdings and net-worth. Just by typing in the company they are searching for, users can find the most marketable stock details quickly and easily.

When a user purchases stock they create a new holding with the quantity of stock they would like to own. This is done through a fetch request (as seen below), which bypasses some of the limitations in XMLHttpRequests (eg. AJAX) by making the information available to the window.

  ```javascript
  export const createHolding = (data) => {
    return fetch(`http://exchanger-ranger.herokuapp.com/api/holdings`, {
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

### React Native Navigator
In order to switch between React Native components, the navigator is used to render each new route. Initially this is for used to render the splash page.

  ```
    <Navigator
        initialRoute={{id: 'Splash', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
    />
  ```
  When a user wants to move to a different view, they are guided to a button which renders the desired component.
  Adding the desired component to the navigator allows the routes to trigger the new component to render


## Future Features
  * Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
  * Visualizations for stock activity and user investments
  * Provide an RSS feed for each stock symbol and/or market sector.
  * Player ability to create custom challenges with friends
       * Private challenges: user_id, participant_id, date_start, start_amount, limit
       * users can join or create (private) challenges with other users and set certain rules such as starting pot, group size, and whether shorting is allowed.
  * Develop user portfolio graph display on log-in
  * User badges for each month won
