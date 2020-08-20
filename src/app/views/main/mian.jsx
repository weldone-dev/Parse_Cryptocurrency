import React, { Component } from 'react'
import style from './style.module.less'
import Select from './select_crypto'
import Export from './export_to_json'
export default function(){
    window.option_json = {}
    return(
        <main>
            <h2>Выберите криптовалюту: </h2>
            <Select />
            <Export />
        </main>
    )
}