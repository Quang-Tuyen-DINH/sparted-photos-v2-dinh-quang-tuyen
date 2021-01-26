import m from 'mithril';
import { PhotosList } from './controllers/PhotosList';
import "../public/styles.css";

const App = () => {
  return {
    view: () =>
      m(PhotosList, {
      })
  };
};

m.mount(document.body, App);
