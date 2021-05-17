import * as Types from 'types/generated';

import * as Operations from 'gql';
import * as Apollo from '@apollo/client';
const defaultOptions = {};

export function usePageQuery(
  baseOptions: Apollo.QueryHookOptions<Types.PageQuery, Types.PageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.PageQuery, Types.PageQueryVariables>(Operations.Page, options);
}
export function usePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.PageQuery, Types.PageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.PageQuery, Types.PageQueryVariables>(Operations.Page, options);
}
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<Types.PageQuery, Types.PageQueryVariables>;
