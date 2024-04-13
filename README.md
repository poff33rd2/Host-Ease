## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

#Fetching Data: 
You can fetch data two ways
* API Layer - sits between code and database to retrieve 3rd party resources and or fetch data from client via the server.
* Database query - Used to interact with APIs databases and query a database directly using React Server Components to without risking expose database secrets to client.
* Server Components (react) - No need for data fetching libraries or API layers. Components execute via the server allowing for expensive data fetching to be on the server and only show client the results. 

data.ts - responsible for all data queries

Sequential Data Fetching (waterfall) - used when a condition needs to be satisfied before another request is made.

----- Sequential -----
const revenue = await fetchRevenue();
const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData(); // wait for fetchLatestInvoices() to finish

* data is initialized in order.

Parallel Data Fetching - intiates all data requests at the same time to avoid waterfall fetching

promise.all()

promise.allSettled()

--- parallel fetching ---
const data = await Promise.all([
    invoiceCountPromise,
    customerCountPromise,
    invoiceStatusPromise
])