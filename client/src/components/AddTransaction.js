import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Dodaj novu transakciju</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Oznaka plaćanja</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Naziv transakcije..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Vrednost <br />
            (negativno - zaduženje, pozitivno - potražnja)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Unesite iznos..." />
        </div>
        <button className="btn">Dodaj Transakciju</button>
      </form>
    </>
  )
}
