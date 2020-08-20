import React, { Component } from 'react'
import style from './style.module.less'
import json from '@/assets/crypt.json'
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
function send(name, time, starTime, endTime){
    console.log(`https://web-api.coinmarketcap.com/v1.1/cryptocurrency/quotes/historical?convert=USD,${name}&format=chart_crypto_details&id=1&interval=${time}&time_start=${starTime}&time_end=${endTime}`)
    fetch(proxyUrl + `https://web-api.coinmarketcap.com/v1.1/cryptocurrency/quotes/historical?convert=USD,${name}&format=chart_crypto_details&id=1&interval=${time}&time_start=${starTime}&time_end=${endTime}`)
            .then(blob => blob.json())
            .then(data => {
                return data;
            })
            .catch(e => {
                console.log(e)
            });
}
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

var obj = {}
export default class Select_crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeDark: document.body.className === "dark",
        }
        this.json = Object.keys(json)
        this.handleDownload = this.handleDownload.bind(this)
    }
    
    handleDownload(e) {
        e.target.children[0].style.display = "block"
        let startTime = json[option_json["name"]]
        //Object.assign(send(option_json["name"], option_json["time"], startTime, Date.now()), obj)
        download(JSON.stringify(obj), 'json.json', 'text/plain');
        e.target.children[0].style.display = "none"
    }
    render() {
        this.classs = style.export + ' ' + (this.state.themeDark ? style.dark : style.light)
        let classs = style.fa + ' fa fa-spinner fa-spin'
        return (
            <section className={this.classs}>
                <a onClick={this.handleDownload} className={style.buttonload}><i className={classs}></i>Loading</a>
            </section>
        )
    }
}
