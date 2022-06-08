import useAuthToken from './authToken';
import { GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';

function useGqlClient() {
    const [authToken] = useAuthToken();

    //TODO you must set api endpoint
    const endpoint = "API_ENDPOINT_HERE";
    const gqlClient = new GraphQLClient(endpoint
    );

    useEffect(() => {
        gqlClient.setHeader('Authorization', `BEARER ${authToken}`);
    }, [authToken]);

    return gqlClient;
}

export default useGqlClient;
