import React, { useEffect, useState } from 'react';

function FetchedQuotesFromApi() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let isCancelled = false;

    const fetchQuotes = async () => {
      const headers = {
        'X-Api-Key': 'tBEpSsSl/Zuyge9ZZeXIvw==9k8eiBV3xSa6FTrK',
      };

      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=success',
        { headers },
      );

      if (response.status >= 200 && response.status <= 299) {
        const fetchedData = await response.json();
        if (!isCancelled) {
          setQuotes(fetchedData);
          setLoading(false);
        }
      } else {
        const errorMessage = 'Oops! Something went wrong';
        if (!isCancelled) {
          setErrorMsg(errorMessage);
          setLoading(false);
        }
      }
    };

    fetchQuotes();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="quoteDiv">
      {loading ? <p>Loading...</p> : null}
      {errorMsg && <p>{errorMsg}</p>}
      {quotes.map((individualQuote) => (
        <p key={individualQuote.author}>
          {individualQuote.quote}
          {' '}
          {'  -'}
          {' '}
          {individualQuote.author}
          {' '}
        </p>
      ))}
    </div>
  );
}

export default FetchedQuotesFromApi;