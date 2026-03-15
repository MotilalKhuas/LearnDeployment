import { Provider } from 'react-redux'
import AppRoute from './route'
import store from './store/store'

const Index = () => {
  return (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
  )
}

export default Index