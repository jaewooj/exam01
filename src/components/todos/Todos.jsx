import { useRef, useState } from 'react';
import dataList from '../../assets/api/todosData'
import './Todos.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    const no = useRef(dataList.length+1)
    const [ data, setData ] = useState(dataList)
   

    //추가
    const onAdd = ( text )  => {
        setData([
            ...data ,
            {
                id:no.current++,
                text,
                isChk: false 
            }
        ])

    }

    //삭제
    const onDel = ( id )  => {
      setData( data.filter( item => item.id !== id ))
    }

    //변경, 수정 
    const onChk = (id)  => {
        setData( data.map( item => item.id === id ? {...item, isChk: !item.isChk }:item ))
    }

    return (
        <div className="Todos">
            <h1>할일만들기</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onChk={onChk} />
        </div>
    );
};

export default Todos;