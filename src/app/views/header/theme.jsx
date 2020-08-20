import React, { Component } from 'react'
import style from './style.module.less'
export default class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeDark: document.body.className === "dark"
        }
        this.handleThemeEvent = this.handleThemeEvent.bind(this)
    }
    handleThemeEvent() {
        if(this.state.themeDark){
            document.body.className = ''
        }else{
            document.body.className = 'dark'
        }
        
        this.setState({
            themeDark: document.body.className==="dark"
        })
    }


    render() {
        this.classs = style.theme + ' ' + (this.state.themeDark? style.dark : style.light)
        return (
            <div className={this.classs} onClick={this.handleThemeEvent}>
                Изменить тему на {this.state.themeDark ? "светлую" : "темную"}
            </div>
        )
    }
}
