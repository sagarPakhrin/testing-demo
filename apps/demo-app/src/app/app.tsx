import Counter from '../components/counter/counter';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Counter />
    </div>
  );
}

export default App;
