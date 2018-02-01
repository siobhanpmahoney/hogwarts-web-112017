import React from 'react'

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label for="greasy">Greasy?
          <input type="checkbox" value="greasy" id="greasy"></input>
        </label>
        <select>
          <option disabled selected value>Sort By:</option>
          <option value="name">Alphabetical</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    )
  }

}

export default Filter