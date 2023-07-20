import React, {useState} from 'react';
import s from './UserItemG.module.scss';
import btn from '../../assets/More_btnsvg.svg'
import add_btn from '../../assets/Add_bnt.svg';
import added_btn from '../../assets/btn_Check.svg';

interface Props {
    name: string
    id: number
    image: string
    add: boolean
}



const UserItemG = ({name, id, image,add}: Props) => {

    let [selectedUser,setSelectedUser] = useState(false);

    let toggleAdding = () => {
        setSelectedUser(!selectedUser);
    }

    return (
        <div className={add ? s.connt : s.connt_n}>
            <div className={s.cont} style={{background: selectedUser ? 'rgba(227, 255, 226, 1)' : '#F5F5F5'}}>
                <div className={s.info}>
                    <img src={image} alt=""/>
                    <span>{name}</span>
                </div>
                <img className={s.points} src={btn} alt=""/>
            </div>
            {selectedUser
                ? <img className={s.add_btn} onClick={toggleAdding} src={added_btn} alt=""/>
                : <img className={s.add_btn} onClick={toggleAdding} src={add_btn} alt=""/>
            }
        </div>
    );
};

export default UserItemG;