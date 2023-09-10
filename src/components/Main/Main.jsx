import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import StartPage from '../StartPage';
import ErrorPage from '../ErrorPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/auth' element={<StartPage/>}></Route>
        <Route path='/' element={<StartPage/>}></Route>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </Layout>
  </main>
);

// {isModalOpen &&
//   <Modal
//     markdown={markdown}
//     title={title}
//     author={author}
//     id={id}
//     closeModal={() => setIsModalOpen(false)}
//   />}
