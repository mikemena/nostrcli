function UserAccounts() {
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    async function fetchAccounts() {
      const res = await fetch(
        'https://proton.api.atomicassets.io/atomicassets/v1/accounts'
      );
      const { data: accountList } = await res.json();

      setAccounts(accountList);

      // logging both the state and the fetched value
      console.log(accounts, accountList);
      // accounts (state) will be undefined
      // if the fetch was successful, accountList will be an array of accounts (as per the API payload)
    }

    fetchAccounts();
  }, []);

  return <div>{JSON.stringify(accounts)}</div>;
}
