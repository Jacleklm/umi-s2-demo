import yayJpg from '../assets/yay.jpg';
import GSheet from './GSheet';
import BaseDemo from './BaseDemo';

export default function HomePage() {
  return (
    <div>
      1
      <BaseDemo />1<h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
