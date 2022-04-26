import './App.css';
import Layout from './components/layout/layout'
import NToast from './components/notificationToast/NotificationToast.jsx'
import SubscriptionModal from './components/subscriptionModal/SubscriptionModal'
import Header from './components/header/Header'
import Body from './components/body/body.jsx'
function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <SubscriptionModal />
      <NToast />
    </Layout>
  );
}

export default App;
