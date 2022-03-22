import {Dimensions} from 'react-native';
export const stringsTexts = {
  redirectSplash: 'Splash',
  redirectHome: 'Home',
  redirectLogin: 'Login',
  wrongPass: 'Please enter Valid Password',
  wrongEmail: 'Please enter Valid Email',
};

export const async_storage = {
  IS_LOGIN: 'IS_LOGIN',
};
export const homeData = [
  {
    path: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Chocolaty Queen',
  },
  {
    path: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Tigger fresh',
  },
  {
    path: 'https://1.bp.blogspot.com/-Muc21xaQjYg/XluhYO6f6vI/AAAAAAAAPJw/T51WnNCctz4Vxn_9REzJuftkznfuRGKUgCLcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpic%2B%25281%2529.jpg',
    name: 'Twilight Queenbee',
  },
  {
    path: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Bikewithgirl',
  },
  {
    path: 'https://i.pinimg.com/550x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg',
    name: 'Chocolaty Queen',
  },
  {
    path: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    name: 'Lovecapri',
  },
  {
    path: 'https://wallpaperaccess.com/full/2213426.jpg',
    name: 'Hot Babe',
  },
  {
    path: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Profile-Picture-7.jpg',
    name: '	Peace Hug',
  },
  {
    path: 'https://wallpaperaccess.com/full/2213424.jpg',
    name: 'Lil Cutie',
  },
  {
    path: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Kara',
  },
];

export function getWidhPer(width_per) {
  const windowWidth = Dimensions.get('window').width * 0.01;
  return windowWidth * width_per;
}
export function getHeightPer(height_per) {
  const windowHeight = Dimensions.get('window').height * 0.01;
  return windowHeight * height_per;
}
