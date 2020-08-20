import React, { Component } from 'react'
import style from './style.module.less'
import json from '@/assets/crypt.json'
export default class Select_crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeDark: document.body.className === "dark",
            
            jsonKeySelect: null
        }
        this.step =  ["5m","10m","15m","30m","45m","1h","2h","3h","4h","6h","12h","24h","1d","2d","3d","7d","14d","15d","30d","60d","90d","365d"]
        this.json = Object.keys(json)
        this.handleChange = this.handleChange.bind(this) 
        this.handleOption = this.handleOption.bind(this) 
    }
    handleOption(e){

        let time_step = document.getElementsByClassName(style.time_step)[0]
        if(e.target.value != "Select"){
            time_step.style.display = "block"

            window.option_json["name"] = e.target.value
        }else{
            time_step.style.display = "none"
            document.getElementsByClassName(style.buttonload)[0].style.display = "none"
        }
        
    }
    handleChange() {
        let time = document.getElementById(style.time)
        let value = parseInt(time.value)
        let time_value = document.getElementById(style.time_value)
        time_value.style.right = (time.clientWidth-20-(time.clientWidth/this.step.length)*value>>0).toString() + "px"
        time_value.textContent = this.step[value]
        window.option_json["time"] =  this.step[value]
        document.getElementsByClassName(style.buttonload)[0].style.display = "flex"
    }
    render() {
        this.classs = style.select_crypto + ' ' + (this.state.themeDark ? style.dark : style.light)
        return (
            <section className={this.classs}>
                <div className={style.list}>
                <select onChange={this.handleOption} defaultValue="Selected">
                    <option>Select</option>
                    {this.json.map((key, index) => <option key={index}>{key}</option>)}
                    </select>
                </div>
                <div className={style.time_step}>
                    <input id={style.time} type="range" min="0" defaultValue="0" max="21" onChange={this.handleChange} />
                    <div id={style.time_value}></div>
                </div>
            </section>
        )
    }
}
