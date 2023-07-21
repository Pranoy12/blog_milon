const { ApolloClient, InMemoryCache } = require("@apollo/client");


const client =  new ApolloClient({
    uri: "https://api-ap-south-1.hygraph.com/v2/clk5vzitv1eir01urcgvxgvu3/master",
    cache: new InMemoryCache(),
});

export default client;