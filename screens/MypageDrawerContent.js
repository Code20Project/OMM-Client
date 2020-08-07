import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import{ AuthContext } from '../components/context';

export default function MypageDrawerContent(props) {
  //   const paperTheme = useTheme();
  //   const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>최성규</Title>
                <Caption style={styles.caption}>contact@codestates.com</Caption>
              </View>
            </View>

            {/* 영역 나누는 섹션 */}
            <Drawer.Section style={styles.bottomDrawerSection} />
          </View>

          {/* Mypage drawer 부분 */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="강의 보기"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="나의 프로필 보기"
              onPress={() => {
                // 프로필 화면으로 이동
                props.navigation.navigate('Lecture');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesignIcon name="bars" color={color} size={size} />
              )}
              label="나의 강의 목록"
              onPress={() => {
                // my lecture list 로 이동
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesignIcon name="heart" color={color} size={size} />
              )}
              label="나의 위시리스트"
              onPress={() => {
                // wish list 이동
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="clock-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="예약 완료한 강의"
              onPress={() => {
                props.navigation.navigate('PreOrderLectureScreen');
              }}
            />
          </Drawer.Section>
          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color={color}
                  size={size}
                />
              )}
              label="Sign Out"
              onPress={() => {
                signOut();
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      {/* 로그아웃 */}

      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginTop: 20,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 0.5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
