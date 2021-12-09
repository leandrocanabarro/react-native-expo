import * as React from 'react'

import { useDebounce } from '../../hooks/useDebounce'

import * as S from './styles'

type Props = {
  doSearch(value: string): void
}

export function Search({ doSearch }: Props) {
  const [query, setQuery] = React.useState('')
  const debouncedValue = useDebounce<string>(query, 500)

  const onChangeTerm = value => {
    setQuery(value)

    if (value === '') {
      doSearch('')
    }
  }

  React.useEffect(() => {
    doSearch(query)
  }, [doSearch, query, debouncedValue])

  return <S.Input onChangeText={onChangeTerm} value={query} placeholder="Search product" />
}
