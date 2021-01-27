import m from 'mithril';
import { photosList } from './controllers/PhotosList';
import "../public/styles.css";

const app = () => {
  return {
    view: () =>
      m(photosList, {
      })
  };
};

m.mount(document.body, app);
