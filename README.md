# Stock Sector Visualizer Proposal

## Background

Stock traders rely on charts to gain insight on market trends and share their own perspective.

This site will provide live, real-time stock market visualizations specifically displaying market cap by sector, P/E ratio, and other key metrics.

The site will provide an RSS feed for each stock symbol and/or market sector.

## Functionality & MVP

  - View regularly updated sector quotes
  - Individual sector pages with info
  - View news on a sector
  - The site will be hosted on a custom subdomain

## Wireframes
[Wireframes](https://github.com/adelrio1/stockSectorVisualizer/tree/master/docs/wireframes)

## Technologies & Technical Challenges

This site will be built using a Rails backend with a PostgreSQL database. The frontend will be built using React/Redux as well as HTML and CSS. The site will incorporate API's to access data feeds for stock quotes, engines for visualizations, and potentially, for RSS feed/news aggregation.

In addition to the entry file and `package.json` files, there will be two scripts:
- `feed_container.jsx`: will request the stock feed data and render the live quote.
- `chart_container.jsx`: will connect with chart visualization API to produce stock graphics

The primary technical challenges will be:
  - Connecting to the sector market cap API
    https://www.programmableweb.com/api/xigniteglobalnews
    https://www.programmableweb.com/api/sixfinancial
    https://www.programmableweb.com/api/enclout-yahoo-finance/how-to
  - User Chartjs library for data visualizations
  - Aggregating news
  	https://www.programmableweb.com/api/xigniteglobalnews


## Group Members & Work Breakdown
Our group consists of three members, Aaron Farber, Andrea del Rio, and Ryan Odening.

Aaron's primary responsibilities will be:
  - Generate feeds of market data and live stock quotes
Andrea's primary responsibilities will be:
  - Generate news articles related to sector
Ryan's primary responsibilities will be:
  - Use Chartjs library to generate chart visualizations

## Implementation Timeline

### Phase1: Get started on the infrastructure of the extension, following [this guide](https://developer.chrome.com/extensions/getstarted) from Chrome.  By the end of the day, we will have:

- A completed `package.json`/ webpack (Andrea)
- Backend
    Models
      * Sector (Ryan)
      * Article (Ryan)
    Controller
      * Articles (Andrea)
      * Sectors (Andrea)
      * Static pages (Andrea)
- General understanding of APIs we will be using APIs (Aaron, Ryan, Andrea)

### Phase 2: Work on generating powerful visualizations
- Actions/Utils (Aaron)
- Components
  - Sector Index/container (Andrea)
  - Sector show container/sector show (Andrea)
  - Header container/session form container (Andrea)
  - Article show/container (Ryan)
  - Root.jsx (Ryan)
  - App.jsx (Ryan)
- Reducers
  - Session (Ryan)
  - Sector (Andrea)
  - Sector Detail (Andrea)
  - Articles (Ryan)
- Store
- St  ore (Andrea)
- News API (all)
- The ability to pull a stock quote or market sector by symbol (all)

### Phase 3: Develop DB interactions
- Articles (Andrea)
- Sectors (Ryan)
- Individual stocks (bonus) (Aaron)

### Phase 4: Tighten visualizations (Ryan - Andrea - Aaron)
- Clear lingering bugs in infrastructure
- Begin using Chartjs with the API information
- Add some page styling
- Add news aggregation/RSS feeds to application

### Phase 5: Styling the React components and overall site
- Deploy application either on Github pages or on a custom domain, using AWS. (Andrea)
- Ensure smooth bug-free rendering of stock chart visualizations. (All)

### Bonus
- Develop ability to make visualizations manipulatable such as adjusting date range, and potentially adding ability to compare multiple stocks or data points in same chart.
- Add user watchlists.
