import classes  from './app.module.scss';
import Logo from './Logo.svg'

// import Header from '../header';
import Filter from '../filter'
import TicketList from '../ticket-list';

console.log(classes);

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
