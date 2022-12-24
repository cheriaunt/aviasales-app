import Filter from '../filter';
import TicketList from '../ticket-list';
import Header from '../header';

import classes from './app.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes['app-main']}>
        <Filter />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
