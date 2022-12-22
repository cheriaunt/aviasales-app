import Filter from '../filter';
import TicketList from '../ticket-list';

import classes from './app.module.scss';
import Logo from './Logo.svg';

function App() {
  return (
    <div className={classes.app}>
      <img className={classes.logotype} src={Logo} alt='logotype' />
      <main className={classes['app-main']}>
        <Filter />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
