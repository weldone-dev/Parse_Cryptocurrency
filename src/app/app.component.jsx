import React, { Component } from 'react'

import style from './app.module.less'
import Header from './views/header/header'
import Main from './views/main/mian'

class App extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <Main />
      </div>
    )
  }
}
export default App;