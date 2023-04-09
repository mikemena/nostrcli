import { useState, useEffect } from 'react';

function Relays() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [relays, setRelays] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetch('https://api.nostr.watch/v1/online')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setRelays(result);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(relays);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <form>
          {relays.map(relay => {
            return (
              <label>
                <input
                  type='checkbox'
                  value={relay}
                  id={relay}
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                {relay}
              </label>
            );
          })}
        </form>
      </div>
    );
  }
}

export default Relays;
