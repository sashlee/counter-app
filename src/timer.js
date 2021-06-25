import React, {useState, useEffect} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function Timer () {
    const [currentTime, setTime] = useState (new Date().toLocaleTimeString());
    
    useEffect(() =>{
        setInterval(() =>{
            setTime(new Date().toLocaleTimeString())
        },1000);

        return () => {
            clearInterval(setTime)
        }
    
    })

    return(
        <div>
            <div>
                <Button  style={{  width: '15%' }} type="danger" ghost>{currentTime}</Button>
            </div>           
        </div>


    );
}