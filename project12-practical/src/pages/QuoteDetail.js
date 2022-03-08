import React, { useEffect } from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  useEffect(() => {
    sendRequest(quoteId);

  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No Quote found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={match.path}>
        <Comments />
      </Route>
    </section >

  )
}

export default QuoteDetail;