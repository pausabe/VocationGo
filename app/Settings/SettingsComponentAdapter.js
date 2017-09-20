import React, { Component } from 'react';
import SettingsManager, {diocesis, lloc, invitatori} from '../Settings/SettingsManager';
import SettingComponent from '../Settings/SettingComponent';

//Id generating different keys for testing
var id = 0;

export default class SettingsComponentAdapter{

    static async getSettingsOptions(){
        let options = [];
        //options.push(await SettingsComponentAdapter.getSettingComponentPrayLliures());
        //options.push(await SettingsComponentAdapter.getSettingComponentUseLatin());
        //options.push(await SettingsComponentAdapter.getSettingComponentTextSize());
        options.push(await SettingsComponentAdapter.getSettingComponentDiocesis());
        //options.push(await SettingsComponentAdapter.getSettingComponentLloc());
        //options.push(await SettingsComponentAdapter.getSettingComponentInvitatori());
        return options;
    }

    /*static async getSettingComponentUseLatin(){
        let value = await SettingsManager.getSettingUseLatin() === "true" ? true : false;
        let component = (<SettingComponent selectorComponent="switch" name="Himnes en llatí" id="useLatin" key="useLatin" value={value} callback={(id, value) => {
            SettingsManager.setSettingUseLatin(value ? "true" : "false");
        }}/>);
        return component;
    }

    static async getSettingComponentPrayLliures(){
        let value = await SettingsManager.getSettingPrayLliures() === "true" ? true : false;
        let component = (<SettingComponent selectorComponent="switch" name="Memòries lliures" id="prayLliures" key="prayLliures" value={value} callback={(id, value) => {
            SettingsManager.setSettingPrayLliures(value ? "true" : "false");
        }}/>);
        return component;
    }

    static async getSettingComponentTextSize(){
        let value = parseInt(await SettingsManager.getSettingTextSize());
        let component = (<SettingComponent selectorComponent="slider" name="Mida del text" id="textSize" key="textSize"
            value={value} selectorProps={{minimumValue: 1, maximumValue: 5}} callback={(id, value) => {
                SettingsManager.setSettingTextSize(Math.trunc(value)+"");
            }}/>);
        return component;
    }*/

    static async getSettingComponentDiocesis(){
        let value = await SettingsManager.getSettingDiocesis();
        value = _getKeyFromValue(diocesis, value);
        let component = (<SettingComponent selectorComponent="picker" name="Diòcesi" id="diocesis" key="diocesis"
            value={value} options={diocesis} selectorProps={{mode: "dropdown"}} callback={(id, value) => {
                SettingsManager.setSettingDiocesis(diocesis[value]);
            }}/>);
        return component;
    }

    /*static async getSettingComponentLloc(){
        let value = await SettingsManager.getSettingLloc();
        value = _getKeyFromValue(lloc, value);
        let component = (<SettingComponent selectorComponent="picker" name="Lloc" id="lloc" key="lloc"
            value={value} options={lloc} selectorProps={{mode: "dropdown"}} callback={(id, value) => {
                SettingsManager.setSettingLloc(lloc[value]);
            }}/>);
        return component;
    }


    static async getSettingComponentDayStart(){
        let value = await SettingsManager.getSettingDayStart();
        let component = (<SettingComponent selectorComponent="picker" name="El dia comença a les" id="dayStart" key={"dayStart"}
            value={value} options={{0: "00:00 AM", 1: "01:00 AM", 2: "02:00 AM", 3: "03:00 AM"}} selectorProps={{mode: "dropdown"}} callback={(id, value) => {
                SettingsManager.setSettingDayStart(value);
            }}/>);
        //id++;//Augment ID for testing
        return component;
    }

    static async getSettingComponentInvitatori(){
        let value = await SettingsManager.getSettingInvitatori();
        value = _getKeyFromValue(invitatori, value);
        let component = (<SettingComponent selectorComponent="picker" name="Invitatori" id="invitatori" key="invitatori"
            value={value} options={invitatori} selectorProps={{mode: "dropdown"}} callback={(id, value) => {
                SettingsManager.setSettingInvitatori(invitatori[value]);
            }}/>);
        return component;
    }*/

}

function _getKeyFromValue(object, value){
    for(key in object){
        if(object[key] == value){
            return key;
        }
    }
}
