import {bootstrap} from 'angular2/platform/browser';
import TodoList from './todolist/todolist';
import {TodoStore} from './store/todostore';
bootstrap(TodoList, [TodoStore]);
