import React, { FormEvent, useRef } from 'react';

import styles from './Form.module.scss';
import { SearchIcon } from '../shared/Icons';

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
  };

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
            <SearchIcon />
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
