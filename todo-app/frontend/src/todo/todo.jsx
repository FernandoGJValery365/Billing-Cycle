import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';


const URL = 'http://localhost:3003/api/todos';

export default props => (
    <div>
        <PageHeader name='tarefas' small='cadastro' />
        <TodoForm />
        <TodoList />
    </div>
);