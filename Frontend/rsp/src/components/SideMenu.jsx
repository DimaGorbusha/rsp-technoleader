import { BookOutlined, FolderOutlined, TeamOutlined, MessageOutlined, BellOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Заявки', 'requests', <FolderOutlined />),
  getItem('Резервный список', 'reserveList', <BookOutlined />),
  getItem('Собеседования', 'interview', <TeamOutlined />),
  getItem('Связь с резервом', 'reserveConnection', <MessageOutlined />),
  getItem('Уведомления', 'notifications', <BellOutlined />),
];

const SideMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 208,
      }}
      defaultSelectedKeys={['requests']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;