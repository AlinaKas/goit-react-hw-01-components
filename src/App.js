import './App.css';

import user from './components/social-profile/user.json';
import Profile from './components/social-profile/Profile';

import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';

import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';

import transactions from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory';

export default function App() {
  return (
    <div className="container">
      <Profile
        // key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
