// Importing a stylesheet makes its CSS rules available to this component.
import './App.css'
import { priceData } from './data/priceData'

// A React component is a function that returns JSX.
function App() {
  // This calculates a value from the last item in the array.
  const latestPrice = priceData[priceData.length - 1].price

  // `return` is a JavaScript keyword. The JSX inside it describes the UI.
  return (
    // JSX uses `className` instead of HTML's `class` attribute.
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Commodity Analysis</p>
        <h1>Track everyday prices</h1>
        <p>
          Review historical commodity prices and prepare for future trends.
        </p>
      </header>

      <section className="controls">
        {/* `htmlFor` connects this label to the input whose `id` is "commodity". */}
        <label htmlFor="commodity">Choose a commodity</label>
        {/* `defaultValue` sets the initial option for this uncontrolled select. */}
        <select id="commodity" defaultValue="coffee">
          {/* `value` is the value submitted or read when this option is selected. */}
          <option value="coffee">Coffee</option>
          <option value="milk">Milk</option>
          <option value="wheat">Wheat</option>
        </select>
      </section>

      <section className="price-summary">
        <p>Current coffee price</p>
        {/* Curly braces insert a JavaScript value into JSX. */}
        <strong>${latestPrice.toFixed(2)}</strong>
        <span>per unit</span>
      </section>

      <section className="price-history">
        <h2>Historical Prices</h2>

        <div className="price-list">
          {/* `map` creates one JSX element for every item in priceData. */}
          {priceData.map((point) => (
            // React uses `key` to distinguish items when rendering a list.
            <div className="price-row" key={point.date}>
              <span>{point.date}</span>
              {/* `toFixed(2)` formats the number with exactly two decimal places. */}
              <strong>${point.price.toFixed(2)}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="prediction-placeholder">
        <h2>Future predition</h2>
        <p>Prediction feature to come soon</p>
      </section>
    </main>
  )
}

// Makes App available to the file that starts the React application.
export default App
