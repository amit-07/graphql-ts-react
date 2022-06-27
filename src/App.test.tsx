import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';


test('renders learn react link', () => {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
  });
  
  render(<ApolloProvider client={client}>
      <App />
    </ApolloProvider>);
  const linkElement = screen.getByText(/Discovery/i);
  expect(linkElement).toBeInTheDocument();
});
