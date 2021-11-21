import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log('credentials ', credentials);
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    console.log('data = ', data);
    return data;
  } catch (error) {
      alert(error.message);
      // switch (error) {
      //   case '400':
      //     alert('Ошибка создания пользователя.');
      //     break;
      //   case '500':
      //     alert('Ошибка сервера.');
      //     break;
      //   default:
      //     alert(error.message);
      // }
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);
    return data;
  } catch (error) {
      alert(error.message);
      // switch (error) {
      //   case '400':
      //     alert('Ошибка логина.');
      //     break;
      //   default:
      //     alert(error.message);
      // }

  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    
    token.unset();
  } catch (error) {
      alert(error.message);
      // switch (error) {
      //   case '401':
      //     alert('Отсутствует заголовок с токеном авторизации.');
      //     break;
      //   case '500':
      //     alert('Ошибка сервера.');
      //     break;
      //   default:
      //     alert(error.message);
      // }
  }
});

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    console.log('Токена нет, уходим из fetchCurrentUser');
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;

// - createAsyncThunk(): принимает тип операции и функцию,
// возвращающую промис, и генерирует thunk, отправляющий типы операции
// pending / fulfilled / rejected на основе промиса