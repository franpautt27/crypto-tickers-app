import { useRouter } from 'expo-router'

const useAppNavigation = () => {
  const {push} = useRouter()

  const goToTickerDetails = (id: string) => {
    push({ pathname: '/tickers/[id]', params: { id } })
  }

  const goToSearchScreen = () => {
    push("/search")
  }

  return {
    goToTickerDetails,
    goToSearchScreen
  }
}

export default useAppNavigation