import React, { FormEvent, useRef } from 'react';

import styles from './Form.module.scss';

const Form = ({ submitHandler }: { submitHandler: (query: string) => void }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (searchRef.current) {
      submitHandler(searchRef.current.value);
    }
  };

  const clearHandler = () => {
    submitHandler('');
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Search For Recipes:</legend>
        <div className={styles.group}>
          <input
            ref={searchRef}
            className={styles.input}
            type="search"
            id="search"
            name="Search"
            placeholder="Type recipe name..."
          />
          <button className={styles.submit} type="submit" title="Search For Recipes">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9.5 14C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14zm6 0h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5z"></path>
            </svg>
          </button>
        </div>
        <button className={styles.clear} type="reset" onClick={clearHandler}>
          Clear
        </button>
      </fieldset>
    </form>
  );
};

export const FromMemo = React.memo(Form);
