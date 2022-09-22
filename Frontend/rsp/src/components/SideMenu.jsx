import { BookOutlined, FolderOutlined, TeamOutlined, MessageOutlined, BellOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

const menuList = [
  {
      url: "requests",
      name: "Заявки",
      icon: <FolderOutlined />
  },
  {
      url: "reserveList",
      name: "Резервный список",
      icon: <BookOutlined />,
  },
  {
      url: "interviews",
      name: "Собеседования",
      icon: <TeamOutlined />,
  },
  {
      url: "reserveConnection",
      name: "Связь с резервом",
      icon: <MessageOutlined />,
  },
  {
      url: "notifications",
      name: "Уведомления",
      icon: <BellOutlined />,
  },
];

const SideMenu = () => {
  return (
      <>
          <Menu
              theme="light"
              mode="inline"
              style={{
                width: 208,
              }}

          >
              {menuList.map((el) => (
                  <Menu.Item key={el.url} icon={el.icon}>
                      <a href={el.url}>{el.name}</a>
                  </Menu.Item>
              ))}
          </Menu>
      </>
  );
};

export default SideMenu;