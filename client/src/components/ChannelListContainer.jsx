import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital/png';

const SideBar = () => {
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src='HospitalIcon' alt='Hospital' width='30'/>
            </div>
        </div>
    </div>
}

const ChannelListContainer = () => {
    return (
        <div>
            <h1>ChannelListContainer</h1>
        </div>
    )
}

export default ChannelListContainer
