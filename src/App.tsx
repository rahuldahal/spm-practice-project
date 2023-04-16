import './App.css';
import Cards from './Components/Cards';

export default function App(): JSX.Element {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col text-center gap-4 mb-8 p-4">
        <h1 className="text-purple-600 text-4xl font-bold">
          HDC BIM 2018 Batch
        </h1>

        <p className="text-gray-600 md:text-lg">
          We're the first ever BIM batch of{' '}
          <abbr title="Himalaya Darshan College">HDC</abbr>
        </p>
      </div>

      <Cards />
    </div>
  );
}
