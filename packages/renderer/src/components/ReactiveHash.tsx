import { useCallback, useMemo, useState } from 'react';

const ReactiveHash = () => {
  const [rawString, setRawString] = useState('Hello World');

  const onInputChange = useCallback(
    (event) => setRawString(event.target.value),
    [rawString],
  );

  const hashedString = useMemo(() => {
    return window.nodeCrypto.sha256sum(rawString);
  }, [rawString]);

  return (
    <>
      <div>
        Raw value:{' '}
        <input value={rawString} type="text" onChange={onInputChange} />
      </div>
      <div>
        Hashed by <code>nodeCrypto</code>:{' '}
        <input value={hashedString} type="text" readOnly={true} />
      </div>
    </>
  );
};

export default ReactiveHash;
