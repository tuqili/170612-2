import Mock from 'mockjs';
import Data from './data.json'

//
Mock.mock('/api/home',{
  code: 0,
  data: Data.home
});
Mock.mock('/api/clothes',{
  code: 0,
  data: Data.clothes
});
Mock.mock('/api/food',{
  code: 0,
  data: Data.food
});
Mock.mock('/api/medical',{
  code: 0,
  data: Data.medical
});
Mock.mock('/api/toys',{
  code: 0,
  data: Data.toys
});
Mock.mock('/api/daily',{
  code: 0,
  data: Data.daily
});
Mock.mock('/api/Cosmetology',{
  code: 0,
  data: Data.Cosmetology
});
