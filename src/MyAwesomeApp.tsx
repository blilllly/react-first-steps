import type { CSSProperties } from 'react';

const firstName = 'Billy';
const lastName = 'Alvear';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear Solid'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Ecuador',
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
